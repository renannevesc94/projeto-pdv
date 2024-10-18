import { Injectable } from '@nestjs/common';
import { IProductRepository } from '../repositories/interface-product.repository';

@Injectable()
export class FindAllProductsService {
  constructor(private readonly productRepository: IProductRepository) {}

  async findAllProducts() {
    return await this.productRepository.findAllProducts();
  }
}
