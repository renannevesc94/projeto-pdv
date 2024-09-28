import { Injectable, NotFoundException } from '@nestjs/common';
import { SaleItemDto } from '../dto/sale-item.dto';
import { ISaleRepository } from '../repositories/interface-sale.repository';

@Injectable()
export class AddItemServiceService {
  constructor(private readonly saleRepository: ISaleRepository) {}

  async addItem(saleId: number, saleItemDto: SaleItemDto) {
    const productExist = await this.saleRepository.getProductById(
      saleItemDto.productsId,
    );
    if (!productExist) {
      throw new NotFoundException('Product not found');
    }

    return await this.saleRepository.addProduct(saleId, saleItemDto);
  }
}
