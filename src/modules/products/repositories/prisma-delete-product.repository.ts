import { PrismaService } from 'src/common/prisma/prisma.service';
import { IDeleteProductRepository } from './interface-delete-product.repository';
import { UUID } from 'crypto';
import { Product } from '../products.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaDeleteProductRepository implements IDeleteProductRepository {
  constructor(private prisma: PrismaService) {}
  async delete(productId: UUID): Promise<Product> {
    return await this.prisma.products.delete({ where: { id: productId } });
  }
}
