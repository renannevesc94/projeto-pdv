import { PrismaService } from 'src/common/prisma/prisma.service';
import { SaleItemDto } from '../dto/sale-item.dto';
import { SaleDto } from '../dto/sale.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ISaleRepository } from './interface-sale.repository';
import { discountTypeEnum } from '../enums/discount-type.enum';
import { statusSaleEnum } from '../enums/satus-sale.enum';

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
            descountValue: true,
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

  async addProduct(
    saleId: number,
    saleItemDto: SaleItemDto,
  ): Promise<SaleItemDto> {
    const itemAdded = await this.prisma.salesItems.create({
      data: {
        sales: {
          connect: { id: saleId },
        },
        products: {
          connect: { id: saleItemDto.productsId },
        },
        quantity: saleItemDto.quantity,
        unitPrice: saleItemDto.unitPrice,
        discountType: saleItemDto.discountType,
        discount: saleItemDto.discount,
        totalPrice: saleItemDto.totalPrice,
        descountValue: saleItemDto.discountValue,
      },
    });

    return itemAdded as SaleItemDto;
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

  async updateItemOnSale(
    id: string,
    saleItem: SaleItemDto,
  ): Promise<SaleItemDto> {
    const updateItem = await this.prisma.salesItems.update({
      where: {
        id: id,
      },
      data: {
        products: {
          connect: { id: saleItem.productsId },
        },
        quantity: saleItem.quantity,
        unitPrice: saleItem.unitPrice,
        discountType: saleItem.discountType,
        discount: saleItem.discount,
        totalPrice: saleItem.totalPrice,
        descountValue: saleItem.discountValue,
      },
    });

    return updateItem as SaleItemDto;
  }
}
