import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { Product } from '../products.entity';
import { IDeleteProductRepository } from '../repositories/interface-delete-product.repository';

@Injectable()
export class DeleteProductService {
  constructor(
    private readonly deleteProductRepository: IDeleteProductRepository,
  ) {}

  async deleteProduct(productId: UUID): Promise<Product> {
    return await this.deleteProductRepository.delete(productId);
  }
}
