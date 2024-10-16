import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { CreateSupplierService } from './services/create-supplier.service';
import { ISupplierRepository } from './repositories/interface-supplier.repository';
import { PrismaSupplierRepository } from './repositories/prisma-supplier.repository';
import { FindAllSuppliersService } from './services/find-all-suppliers.service';
import { DeleteSupplierService } from './services/delete-supplier.service';
import { UpdateSupplierService } from './services/update-supplier.service';

@Module({
  controllers: [SupplierController],
  imports: [],
  providers: [
    CreateSupplierService,
    FindAllSuppliersService,
    DeleteSupplierService,
    UpdateSupplierService,

    {
      provide: ISupplierRepository,
      useClass: PrismaSupplierRepository,
    },
  ],
})
export class SupplierModule {}
