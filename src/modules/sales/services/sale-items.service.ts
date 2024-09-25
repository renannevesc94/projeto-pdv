import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { SaleDto } from '../dto/sale.dto';
import { SaleItemDto } from '../dto/sale-item.dto';
import { ISaleRepository } from '../repositories/interface-sale.repository';

@Injectable()
export class SaleItemsService {
  constructor(private readonly saleRepository: ISaleRepository) {}

  private async getSalesWithItems(saleId: number): Promise<SaleDto> {
    const sale = await this.saleRepository.getSalesWithItems(saleId);
    if (sale.status != 'OPEN') {
      throw new BadRequestException('Sale already closed');
    }
    return sale;
  }

  //Precisa melhorar essa lógica pois está precisando receber o rpeço total
  private async updateItemOnSale(
    itemOnSale: SaleItemDto,
    updateDataItem: SaleItemDto,
  ) {
    itemOnSale.quantity += updateDataItem.quantity;
    itemOnSale.totalPrice += updateDataItem.totalPrice;
    itemOnSale.unitPrice = parseFloat(
      (itemOnSale.totalPrice / itemOnSale.quantity).toFixed(2),
    );

    return await this.saleRepository.updateItemOnSale(itemOnSale);
  }

  async startSaleWithProduct(userId: string, saleItemDto: SaleItemDto) {
    const sale = await this.saleRepository.startSaleWithProduct(userId);
    return await this.addItem(sale.id, saleItemDto);
  }

  async addItem(saleId: number, saleItemDto: SaleItemDto) {
    const productExist = await this.saleRepository.getProductById(
      saleItemDto.productsId,
    );
    if (!productExist) {
      throw new NotFoundException('Product not found');
    }

    const sale = await this.getSalesWithItems(saleId);
    const saleItem = sale.SalesItems.find(
      (item) => item.productsId === saleItemDto.productsId,
    );

    if (saleItem) {
      await this.updateItemOnSale(saleItem, saleItemDto);
    } else {
      await this.saleRepository.addProduct(saleId, saleItemDto);
    }

    return await this.getSalesWithItems(saleId);
  }
}
