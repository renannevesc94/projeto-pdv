import { PrismaService } from 'src/common/prisma/prisma.service';
import { SaleItemDto } from '../dto/sale-item.dto';
import { SaleDto, StatusSale } from '../dto/sale.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ISaleItemsRepository } from './interface-sale-items.repository';

@Injectable()
export class PrismaSaleItemsRepository implements ISaleItemsRepository {
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
      status: saleWithItems.status as StatusSale,
    };
  }

  async addProduct(
    saleId: number,
    saleItemDto: SaleItemDto,
  ): Promise<SaleItemDto> {
    return await this.prisma.salesItems.create({
      data: {
        sales: {
          connect: { id: saleId },
        },
        products: {
          connect: { id: saleItemDto.productsId },
        },
        quantity: saleItemDto.quantity,
        unitPrice: saleItemDto.unitPrice,
        totalPrice: saleItemDto.totalPrice,
      },
    });
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

    return {
      ...saleCreated,
      status: saleCreated.status as StatusSale,
    };
  }

  async updateItemOnSale(product: SaleItemDto): Promise<SaleItemDto> {
    return await this.prisma.salesItems.update({
      where: {
        id: product.id,
      },
      data: {
        quantity: product.quantity,
        unitPrice: product.unitPrice,
        totalPrice: product.totalPrice,
      },
    });
  }
}
