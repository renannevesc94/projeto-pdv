import { PrismaService } from 'src/common/prisma/prisma.service';
import { IFindAllSuppliersRepository } from './interface-find-all-suppliers.repository';
import { Supplier } from '../supplier.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaFindAllSuppliersRepository
  implements IFindAllSuppliersRepository
{
  constructor(private prisma: PrismaService) {}
  async findAll(): Promise<Supplier[]> {
    const suppliers = await this.prisma.suppliers.findMany();
    return suppliers;
  }
}
