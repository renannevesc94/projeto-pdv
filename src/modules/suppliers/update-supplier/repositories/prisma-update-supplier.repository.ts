import { PrismaService } from 'src/common/prisma/prisma.service';
import { IUpdateSupplierRepository } from './interface-update-supplier.repository';
import { UpdateSupplierDto } from '../dto/UppdateSupplier.dto';
import { Supplier } from '../../supplier.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUpdateSupplierRepository
  implements IUpdateSupplierRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async update(
    id: number,
    updateSupplierDto: UpdateSupplierDto,
  ): Promise<Supplier> {
    return await this.prisma.suppliers.update({
      where: { id },
      data: updateSupplierDto,
    });
  }
}
