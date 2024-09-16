import { PrismaService } from 'src/common/prisma/prisma.service';
import { ICreateSupplierRepository } from './interface-create-supplier.repository';
import { Supplier } from '../../supplier.entity';
import { CreateSupplierDto } from '../dto/create-supplier.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCreateSupplierRepository
  implements ICreateSupplierRepository
{
  constructor(private prisma: PrismaService) {}
  create(createSupplierDto: CreateSupplierDto): Promise<Supplier> {
    const { name, description } = createSupplierDto;
    return this.prisma.suppliers.create({
      data: {
        name,
        description,
      },
    });
  }
}
