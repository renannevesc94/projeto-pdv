import { PrismaService } from 'src/common/prisma/prisma.service';
import { IUpdateProductRepository } from './interface-update-product.repository';
import { Product } from '../products.entity';
import { UpdateProductDto } from '../dto/UpdateProductDto';
import { UUID } from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUpdateProductRepository implements IUpdateProductRepository {
  constructor(private prisma: PrismaService) {}
  update(
    productId: UUID,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.prisma.products.update({
      where: {
        id: productId,
      },
      data: {
        ...updateProductDto,
      },
    });
  }
}
