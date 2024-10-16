import { Injectable } from '@nestjs/common';
import { IGetProductById } from 'src/common/interfaces/get-product-by-id.interface';
import { IProductRepository } from '../repositories/interface-product.repository';
import { ProductDto } from 'src/common/dtos/product.dto';

@Injectable()
export class GetProductByIdService implements IGetProductById {
  constructor(private readonly productRepository: IProductRepository) {}

  async getProductById(id: string): Promise<ProductDto> {
    return await this.productRepository.getProductById(id);
  }
}
