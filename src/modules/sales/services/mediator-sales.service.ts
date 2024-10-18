import { Injectable } from '@nestjs/common';
import { StartSaleService } from './start-sale.service';
import { SaleItemDto } from '../dto/sale-item.dto';
import { SaleDto } from '../dto/sale.dto';
import { GetSaleByIdService } from './get-sale-by-id.service';
import { ItemSaleHandlerService } from './item-sale-handler.service';
import { GetItemOnSaleService } from './get-item-on-sale.service';
import { FinalizeSaleService } from './finalize-sale.service';
import { FinalizeSaleDto } from '../dto/finalize-sale.dto';

@Injectable()
export class MediatorSalesService {
  constructor(
    private readonly startSaleService: StartSaleService,
    private readonly getSaleByIdServiceService: GetSaleByIdService,
    private readonly itemSaleHandlerService: ItemSaleHandlerService,
    private readonly getItemOnSaleService: GetItemOnSaleService,
    private readonly finalizeSaleService: FinalizeSaleService,
  ) {}

  private async getSalesWithItems(saleId: number): Promise<SaleDto> {
    return await this.getSaleByIdServiceService.getSalesWithItems(saleId);
  }

  async startSale(userId: string, saleItemDto: SaleItemDto) {
    const sale = await this.startSaleService.startSale(userId);
    return await this.addItem(sale.id, saleItemDto);
  }

  async addItem(saleId: number, saleItemDto: SaleItemDto) {
    const sale = await this.getSalesWithItems(saleId);
    const itemOnSale = this.getItemOnSaleService.getItemOnSale(
      sale.SalesItems,
      saleItemDto.productsId,
    );
    return await this.itemSaleHandlerService.handle(
      sale.id,
      saleItemDto,
      itemOnSale,
    );
  }

  async finalizeSale(saleId: number, finalizeSaleDto: FinalizeSaleDto) {
    const sale = await this.getSalesWithItems(saleId);
    return await this.finalizeSaleService.finalizeSale(sale, finalizeSaleDto);
  }
}
