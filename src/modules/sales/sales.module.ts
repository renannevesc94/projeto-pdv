import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';

import { ISaleRepository } from './repositories/interface-sale.repository';
import { PrismaSaleRepository } from './repositories/prisma-sale.repository';
import { UpdateItemService } from './services/update-item.service';
import { StartSaleService } from './services/start-sale.service';
import { GetSaleByIdService } from './services/get-sale-by-id.service';
import { AddItemService } from './services/add-item.service';
import { MediatorSalesService } from './services/mediator-sales.service';
import { GetItemOnSaleService } from './services/get-item-on-sale.service';
import { ProductsModule } from '../products/products.module';
import { ApllyDiscountService } from './services/aplly-discount.service';
import { CalculateTotalPriceService } from './services/calculate-total-price.service';
import { IApplyDiscount } from './interfaces/interface-apply-discount';
import { ItemSaleHandlerService } from './services/item-sale-handler.service';
import { ICalculateTotalPrice } from './interfaces/interface-calculate-total-price';
import { IAddItem } from './interfaces/interface-add-tem';
import { IUpdateItem } from './interfaces/interface-update-item';
import { FinalizeSaleService } from './services/finalize-sale.service';
import { CancelSaleService } from './services/cancel-sale.service';

@Module({
  controllers: [SalesController],
  providers: [
    GetItemOnSaleService,
    MediatorSalesService,
    StartSaleService,
    GetSaleByIdService,
    ItemSaleHandlerService,
    FinalizeSaleService,
    CancelSaleService,

    {
      provide: ISaleRepository,
      useClass: PrismaSaleRepository,
    },
    {
      provide: IApplyDiscount,
      useClass: ApllyDiscountService,
    },
    {
      provide: ICalculateTotalPrice,
      useClass: CalculateTotalPriceService,
    },
    {
      provide: IAddItem,
      useClass: AddItemService,
    },
    {
      provide: IUpdateItem,
      useClass: UpdateItemService,
    },
  ],
  imports: [ProductsModule],
})
export class SalesModule {}
