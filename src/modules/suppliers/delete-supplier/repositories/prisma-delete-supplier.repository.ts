import { PrismaService } from 'src/common/prisma/prisma.service';
import { IDeleteSupplierRepository } from './interface-delete-supplier.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaDeleteSupplierRepository
  implements IDeleteSupplierRepository
{
  constructor(private prisma: PrismaService) {}

  async delete(id: number) {
    return this.prisma.supplier.delete({
      where: { id },
    });
  }
}
