import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { CreateSupplierService } from './create-supplier/create-supplier.service';
import { ICreateSupplierRepository } from './create-supplier/repositories/interface-create-supplier.repository';
import { PrismaCreateSupplierRepository } from './create-supplier/repositories/prisma-create-supplier.repository';
import { FindAllSuppliersService } from './find-all/find-all-suppliers.service';
import { IFindAllSuppliersRepository } from './find-all/repositories/interface-find-all-suppliers.repository';
import { DeleteSupplierService } from './delete-supplier/delete-supplier.service';
import { IDeleteSupplierRepository } from './delete-supplier/repositories/interface-delete-supplier.repository';
import { PrismaDeleteSupplierRepository } from './delete-supplier/repositories/prisma-delete-supplier.repository';
import { PrismaFindAllSuppliersRepository } from './find-all/repositories/prisma.find-all-suppliers.repository';
import { UpdateSupplierService } from './update-supplier/update-supplier.service';
import { PrismaUpdateSupplierRepository } from './update-supplier/repositories/prisma-update-supplier.repository';
import { IUpdateSupplierRepository } from './update-supplier/repositories/interface-update-supplier.repository';

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
