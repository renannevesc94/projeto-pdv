import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { CreateSupplierService } from './services/create-supplier.service';
import { ICreateSupplierRepository } from './repositories/interface-create-supplier.repository';
import { PrismaCreateSupplierRepository } from './repositories/prisma-create-supplier.repository';
import { IFindAllSuppliersRepository } from './repositories/interface-find-all-suppliers.repository';
import { IDeleteSupplierRepository } from './repositories/interface-delete-supplier.repository';
import { PrismaDeleteSupplierRepository } from './repositories/prisma-delete-supplier.repository';
import { PrismaFindAllSuppliersRepository } from './repositories/prisma.find-all-suppliers.repository';
import { PrismaUpdateSupplierRepository } from './repositories/prisma-update-supplier.repository';
import { FindAllSuppliersService } from './services/find-all-suppliers.service';
import { DeleteSupplierService } from './services/delete-supplier.service';
import { UpdateSupplierService } from './services/update-supplier.service';
import { IUpdateSupplierRepository } from './repositories/interface-update-supplier.repository';

@Module({
  controllers: [SupplierController],
  providers: [
    CreateSupplierService,
    FindAllSuppliersService,
    DeleteSupplierService,
    UpdateSupplierService,

    {
      provide: ICreateSupplierRepository,
      useClass: PrismaCreateSupplierRepository,
    },
    {
      provide: IFindAllSuppliersRepository,
      useClass: PrismaFindAllSuppliersRepository,
    },
    {
      provide: IDeleteSupplierRepository,
      useClass: PrismaDeleteSupplierRepository,
    },
    {
      provide: IUpdateSupplierRepository,
      useClass: PrismaUpdateSupplierRepository,
    },
  ],
})
export class SupplierModule {}
