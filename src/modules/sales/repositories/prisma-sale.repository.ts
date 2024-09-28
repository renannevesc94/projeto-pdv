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

  async getProductById(productId: string): Promise<boolean> {
    const product = await this.prisma.products.findFirst({
      where: { id: productId },
    });
    return !!product;
  }

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
            discount: true,
            discountType: true,
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

  async updateItemOnSale(saleItem: SaleItemDto): Promise<SaleItemDto> {
    const updateItem = await this.prisma.salesItems.update({
      where: {
        id: saleItem.id,
      },
      data: {
        quantity: saleItem.quantity,
        unitPrice: saleItem.unitPrice,
        totalPrice: saleItem.totalPrice,
      },
    });

    return updateItem as SaleItemDto;
  }
}
