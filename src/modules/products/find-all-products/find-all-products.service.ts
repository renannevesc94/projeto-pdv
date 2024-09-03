import { Injectable } from '@nestjs/common';
import { IFindAllProductsRepository } from './repositories/interface-find-all-products.repository';

@Injectable()
export class FindAllProductsService {
  constructor(
    private readonly findAllProductsRepository: IFindAllProductsRepository,
  ) {}

  async findAllProducts() {
    return await this.findAllProductsRepository.findAllProducts();
  }
}
