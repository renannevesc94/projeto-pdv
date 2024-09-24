import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { CreateSaleService } from './create-sale/create-sale.service';
import { ISaleItemsRepository } from './sale-items/repositories/interface-sale-items.repository';
import { PrismaSaleItemsRepository } from './sale-items/repositories/prisma-sale-items.repository';
import { SaleItemsService } from './sale-items/sale-items.service';

@Module({
  controllers: [SalesController],
  providers: [
    CreateSaleService,
    SaleItemsService,

    {
      provide: ISaleItemsRepository,
      useClass: PrismaSaleItemsRepository,
    },
  ],
})
export class SalesModule {}
