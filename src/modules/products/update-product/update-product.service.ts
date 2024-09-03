import { Injectable } from '@nestjs/common';
import { IUpdateProductRepository } from './repositories/interface-update-product.repository';
import { UUID } from 'crypto';
import { UpdateProductDto } from './dto/UpdateProductDto';

@Injectable()
export class UpdateProductService {
  constructor(
    private readonly updateProductRepository: IUpdateProductRepository,
  ) {}

  async updateProduct(productId: UUID, updateProductDto: UpdateProductDto) {
    const updateAt = new Date(Date.now());
    return await this.updateProductRepository.update(productId, {
      ...updateProductDto,
      updated_at: updateAt,
    });
  }
}
