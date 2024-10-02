import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';

import { ISaleRepository } from './repositories/interface-sale.repository';
import { PrismaSaleRepository } from './repositories/prisma-sale.repository';
import { UpdateItemServiceService } from './services/update-item.service';
import { StartSaleServiceService } from './services/start-sale.service';
import { GetSaleByIdServiceService } from './services/get-sale-by-id.service';
import { AddItemServiceService } from './services/add-item.service';
import { SalesMediatorServie } from './services/sales-mediator.service';
import { GetItemOnSaleService } from './services/get-item-on-sale.service';

@Module({
  controllers: [SalesController],
  providers: [
    GetItemOnSaleService,
    SalesMediatorServie,
    UpdateItemServiceService,
    StartSaleServiceService,
    GetSaleByIdServiceService,
    AddItemServiceService,

    {
      provide: ISaleRepository,
      useClass: PrismaSaleRepository,
    },
  ],
})
export class SalesModule {}
