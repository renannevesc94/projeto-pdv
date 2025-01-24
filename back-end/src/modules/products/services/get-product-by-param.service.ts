import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IProductRepository } from '../repositories/interface-product.repository';
import { ProductDto } from 'src/common/dtos/product.dto';

@Injectable()
export class GetProductByParamService {
  constructor(private readonly productRepository: IProductRepository) {}

  async getProductByParam(
    query: Partial<ProductDto> & {
      minPrice: string;
      maxPrice: string;
    },
  ) {
    const searchParams = this.processSearchParams(query);

    const response =
      await this.productRepository.getProductByParam(searchParams);
    if (!response) {
      throw new HttpException('Products not found', HttpStatus.NOT_FOUND);
    }

    return response;
  }

  private processSearchParams(
    query: Partial<ProductDto> & {
      minPrice: string;
      maxPrice: string;
    },
  ) {
    const paramsNumbers = [
      'cost',
      'price',
      'stock',
      'categoryId',
      'supplierId',
      'minPrice',
      'maxPrice',
    ];
    let processedParams: any = {};

    if (query.description) {
      processedParams.description = {
        contains: query.description,
        mode: 'insensitive',
      };
    }

    paramsNumbers.forEach((field) => {
      if (query[field] !== undefined) {
        processedParams[field] = Number(query[field]);
      }
    });

    if (query.minPrice || query.maxPrice) {
      processedParams = {};
      processedParams.price = {
        ...(query.minPrice && { gte: Number(query.minPrice) }),
        ...(query.maxPrice && { lte: Number(query.maxPrice) }),
      };
    }

    return processedParams;
  }
}
