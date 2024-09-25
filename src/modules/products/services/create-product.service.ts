import { Injectable } from '@nestjs/common';
import { IProductRepository } from '../repositories/interface-product.repository';
import { CreateProductDto } from '../dto/CreateProduct.dto';

@Injectable()
export class CreateProductService {
  constructor(private readonly productRepository: IProductRepository) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.create(createProductDto);
  }
}
