import { PrismaService } from 'src/common/prisma/prisma.service';
import { SaleItemDto } from '../dto/sale-item.dto';
import { SaleDto } from '../dto/sale.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ISaleRepository } from './interface-sale.repository';
import { discountTypeEnum } from '../enums/discount-type.enum';
import { statusSaleEnum } from '../enums/satus-sale.enum';
import { FinalizeSaleDto } from '../dto/finalize-sale.dto';

@Injectable()
export class PrismaSaleRepository implements ISaleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getSalesWithItems(saleId: number): Promise<SaleDto> | null {
    const saleWithItems = await this.prisma.sales.findUnique({
      select: {
        id: true,
        discountType: true,
        discount: true,
        total: true,
        paymentMethod: true,
        status: true,
        SalesItems: {
          select: {
            id: true,
            productsId: true,
            quantity: true,
            unitPrice: true,
            totalPrice: true,
            discountType: true,
            discount: true,
            discountValue: true,
          },
        },
      },
      where: {
        id: saleId,
      },
    });

    if (!saleWithItems) {
      throw new NotFoundException('Sale not found');
    }

    return {
      ...saleWithItems,
      discountType: saleWithItems.discountType as discountTypeEnum,
      status: saleWithItems.status as statusSaleEnum,
      SalesItems: saleWithItems.SalesItems.map((item) => ({
        ...item,
        discountType: item.discountType as discountTypeEnum,
      })),
    };
  }

  async startSaleWithProduct(userId: string): Promise<SaleDto> {
    const saleCreated = await this.prisma.sales.create({
      data: {
        user: { connect: { id: userId } },
      },

      include: {
        SalesItems: true,
      },
    });

    return saleCreated as SaleDto;
  }
  async addProduct(
    saleId: number,
    saleItemDto: SaleItemDto,
  ): Promise<SaleItemDto> {
    const { productsId, ...data } = saleItemDto;

    return (await this.prisma.salesItems.create({
      data: {
        sales: { connect: { id: saleId } },
        products: { connect: { id: productsId } },
        ...data,
      },
    })) as SaleItemDto;
  }

  async updateItemOnSale(
    id: string,
    saleItemDto: SaleItemDto,
  ): Promise<SaleItemDto> {
    const { productsId, ...data } = saleItemDto;
    return (await this.prisma.salesItems.update({
      where: {
        id: id,
      },
      data: {
        products: {
          connect: { id: productsId },
        },
        ...data,
      },
    })) as SaleItemDto;
  }

  async finalizeSale(
    saleId: number,
    finalizeSaleDto: FinalizeSaleDto,
  ): Promise<SaleDto> {
    return (await this.prisma.sales.update({
      where: {
        id: saleId,
      },
      data: {
        discountType: finalizeSaleDto.discountType,
        status: finalizeSaleDto.status,
        ...finalizeSaleDto,
      },
      include: {
        SalesItems: true,
      },
    })) as SaleDto;
  }
}
