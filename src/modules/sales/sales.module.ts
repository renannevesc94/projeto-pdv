import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';

import { ISaleRepository } from './repositories/interface-sale.repository';
import { PrismaSaleRepository } from './repositories/prisma-sale.repository';
import { UpdateItemServiceService } from './services/update-item-service.service';
import { StartSaleServiceService } from './services/start-sale-service.service';
import { GetSaleByIdServiceService } from './services/get-sale-by-id-service.service';
import { AddItemServiceService } from './services/add-item-service.service';
import { SalesMediatorServiceService } from './services/sales-mediator-service.service';
import { GetItemOnSaleService } from './services/get-item-on-sale.service';

@Module({
  controllers: [SalesController],
  providers: [
    GetItemOnSaleService,
    SalesMediatorServiceService,
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
