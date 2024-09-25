import { PrismaService } from 'src/common/prisma/prisma.service';
import { Supplier } from '../supplier.entity';
import { CreateSupplierDto } from '../dto/create-supplier.dto';
import { Injectable } from '@nestjs/common';
import { ISupplierRepository } from './interface-supplier.repository';
import { UpdateSupplierDto } from '../dto/UppdateSupplier.dto';

@Injectable()
export class PrismaSupplierRepository implements ISupplierRepository {
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

  async findAll(): Promise<Supplier[]> {
    const suppliers = await this.prisma.suppliers.findMany();
    return suppliers;
  }

  async update(
    id: number,
    updateSupplierDto: UpdateSupplierDto,
  ): Promise<Supplier> {
    return await this.prisma.suppliers.update({
      where: { id },
      data: updateSupplierDto,
    });
  }

  async delete(id: number) {
    return this.prisma.suppliers.delete({
      where: { id },
    });
  }
}
