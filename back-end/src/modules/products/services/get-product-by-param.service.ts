import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IProductRepository } from '../repositories/interface-product.repository';
import { ProductDto } from 'src/common/dtos/product.dto';

@Injectable()
export class GetProductByParamService {
  constructor(private readonly productRepository: IProductRepository) {}

  async getProductByParam(query: Partial<ProductDto>) {
    const paramsNumbers = [
      'cost',
      'price',
      'stock',
      'categoryId',
      'supplierId',
    ];

    const param = Object.entries(query).reduce((acc, [key, value]) => {
      acc[key] = paramsNumbers.includes(key) ? Number(value) : value;
      return acc;
    }, {});

    const response = await this.productRepository.getProductByParam(param);
    if (!response) {
      throw new HttpException('Products not found', HttpStatus.NOT_FOUND);
    }
    return response;
  }
}
