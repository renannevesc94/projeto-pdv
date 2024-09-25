import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { UpdateProductDto } from '../dto/UpdateProductDto';
import { IProductRepository } from '../repositories/interface-product.repository';

@Injectable()
export class UpdateProductService {
  constructor(private readonly productRepository: IProductRepository) {}

  async updateProduct(productId: UUID, updateProductDto: UpdateProductDto) {
    const updateAt = new Date(Date.now());
    return await this.productRepository.update(productId, {
      ...updateProductDto,
      updated_at: updateAt,
    });
  }
}
