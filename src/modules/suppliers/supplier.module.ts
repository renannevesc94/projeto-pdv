import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { CreateSupplierService } from './create-supplier/create-supplier.service';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ICreateSupplierRepository } from './create-supplier/repositories/interface-create-supplier.repository';
import { PrismaCreateSupplierRepository } from './create-supplier/repositories/prisma-create-supplier.repository';
import { FindAllSuppliersService } from './find-all/find-all-suppliers.service';
import { IFindAllSuppliersRepository } from './find-all/repositories/interface-find-all-suppliers.repository';
import { PrismaFindAllCategoriesRepository } from '../categories/find-all/repositories/prisma-find-all-categories.repository';

@Module({
  controllers: [SupplierController],
  providers: [
    CreateSupplierService,
    FindAllSuppliersService,
    PrismaService,
    {
      provide: ICreateSupplierRepository,
      useClass: PrismaCreateSupplierRepository,
    },
    {
      provide: IFindAllSuppliersRepository,
      useClass: PrismaFindAllCategoriesRepository,
    },
  ],
})
export class SupplierModule {}
