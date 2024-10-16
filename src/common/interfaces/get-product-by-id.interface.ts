import { ProductDto } from '../dtos/product.dto';

export abstract class IGetProductById {
  abstract getProductById(id: string): Promise<ProductDto>;
}
