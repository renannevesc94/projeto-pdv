import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ISaleItemsRepository } from '../repositories/interface-sale-items.repository';
import { SaleDto } from '../dto/sale.dto';
import { SaleItemDto } from '../dto/sale-item.dto';

@Injectable()
export class SaleItemsService {
  constructor(private readonly saleItemsRepository: ISaleItemsRepository) {}

  private async getSalesWithItems(saleId: number): Promise<SaleDto> {
    const sale = await this.saleItemsRepository.getSalesWithItems(saleId);
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

    return await this.saleItemsRepository.updateItemOnSale(itemOnSale);
  }

  async startSaleWithProduct(userId: string, saleItemDto: SaleItemDto) {
    const sale = await this.saleItemsRepository.startSaleWithProduct(userId);
    return await this.addItem(sale.id, saleItemDto);
  }

  async addItem(saleId: number, saleItemDto: SaleItemDto) {
    const productExist = await this.saleItemsRepository.getProductById(
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
      await this.saleItemsRepository.addProduct(saleId, saleItemDto);
    }

    return await this.getSalesWithItems(saleId);
  }
}
