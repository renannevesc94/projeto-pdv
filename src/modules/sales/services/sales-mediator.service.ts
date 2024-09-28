import { Injectable } from '@nestjs/common';
import { StartSaleServiceService } from './start-sale.service';
import { SaleItemDto } from '../dto/sale-item.dto';
import { AddItemServiceService } from './add-item.service';
import { SaleDto } from '../dto/sale.dto';
import { GetSaleByIdServiceService } from './get-sale-by-id.service';
import { UpdateItemServiceService } from './update-item.service';
import { GetItemOnSaleService } from './get-item-on-sale.service';

@Injectable()
export class SalesMediatorServiceService {
  constructor(
    private readonly startSaleServiceService: StartSaleServiceService,
    private readonly addItemServiceService: AddItemServiceService,
    private readonly getSaleByIdServiceService: GetSaleByIdServiceService,
    private readonly updateItemServiceService: UpdateItemServiceService,
    private readonly getItemOnSaleService: GetItemOnSaleService,
  ) {}

  private async getSalesWithItems(saleId: number): Promise<SaleDto> {
    return await this.getSaleByIdServiceService.getSalesWithItems(saleId);
  }
  private GetItemOnSaleService(saleItems: SaleItemDto[], productId: string) {
    return this.getItemOnSaleService.getItemOnSale(saleItems, productId);
  }
  async startSale(userId: string, saleItemDto: SaleItemDto) {
    const sale = await this.startSaleServiceService.startSale(userId);
    return await this.addItem(sale.id, saleItemDto);
  }

  async addItem(saleId: number, saleItemDto: SaleItemDto) {
    const sale = await this.getSalesWithItems(saleId);
    const itemSale = this.GetItemOnSaleService(
      sale.SalesItems,
      saleItemDto.productsId,
    );

    if (itemSale) {
      await this.updateItemServiceService.updateItemOnSale(saleItemDto);
      return this.getSalesWithItems(saleId);
    }
    await this.addItemServiceService.addItem(saleId, saleItemDto);
    return this.getSalesWithItems(saleId);
  }
}
