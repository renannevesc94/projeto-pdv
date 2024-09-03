import { PrismaService } from 'src/common/prisma/prisma.service';
import { IFindAllProductsRepository } from './interface-find-all-products.repository';
import { Product } from '../../products.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaFindAllProductsRepository
  implements IFindAllProductsRepository
{
  constructor(private prisma: PrismaService) {}
  findAllProducts(): Promise<Product[]> {
    return this.prisma.products.findMany();
  }
}
