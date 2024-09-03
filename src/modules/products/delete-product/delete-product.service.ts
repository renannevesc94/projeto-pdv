import { Injectable } from '@nestjs/common';
import { IDeleteProductRepository } from './repositories/interface-delete-product.repository';
import { UUID } from 'crypto';
import { Product } from '../products.entity';

@Injectable()
export class DeleteProductService {
  constructor(
    private readonly deleteProductRepository: IDeleteProductRepository,
  ) {}

  async deleteProduct(productId: UUID): Promise<Product> {
    return await this.deleteProductRepository.delete(productId);
  }
}
