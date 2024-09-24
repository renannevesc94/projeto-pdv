import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { ISaleItemsRepository } from './repositories/interface-sale-items.repository';
import { PrismaSaleItemsRepository } from './repositories/prisma-sale-items.repository';
import { SalesManagementService } from './services/sales-management.service';
import { SaleItemsService } from './services/sale-items.service';

@Module({
  controllers: [SalesController],
  providers: [
    SalesManagementService,
    SaleItemsService,

    {
      provide: ISaleItemsRepository,
      useClass: PrismaSaleItemsRepository,
    },
  ],
})
export class SalesModule {}
