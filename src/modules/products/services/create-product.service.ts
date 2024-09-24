import { Injectable } from '@nestjs/common';
import { IcreateProductRepository } from '../repositories/interface-create-product.repository';
import { CreateProductDto } from '../dto/CreateProduct.dto';

@Injectable()
export class CreateProductService {
  constructor(
    private readonly createProductRepository: IcreateProductRepository,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.createProductRepository.create(createProductDto);
  }
}
