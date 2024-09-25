import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';

import { SalesManagementService } from './services/sales-management.service';
import { SaleItemsService } from './services/sale-items.service';
import { ISaleRepository } from './repositories/interface-sale.repository';
import { PrismaSaleRepository } from './repositories/prisma-sale.repository';

@Module({
  controllers: [SalesController],
  providers: [
    SalesManagementService,
    SaleItemsService,

    {
      provide: ISaleRepository,
      useClass: PrismaSaleRepository,
    },
  ],
})
export class SalesModule {}
