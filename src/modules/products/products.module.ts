import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { CreateProductService } from './services/create-product.service';
import { FindAllProductsService } from './services/find-all-products.service';
import { UpdateProductService } from './services/update-product.service';
import { DeleteProductService } from './services/delete-product.service';
import { PrismaProductRepository } from './repositories/prisma-product.repository';
import { IProductRepository } from './repositories/interface-product.repository';
import { GetProductByIdService } from './services/get-product-by-id.service';
import { IGetProductById } from 'src/common/interfaces/get-product-by-id.interface';

@Module({
  controllers: [ProductsController],
  providers: [
    CreateProductService,
    FindAllProductsService,
    UpdateProductService,
    DeleteProductService,
    GetProductByIdService,

    {
      provide: IProductRepository,
      useClass: PrismaProductRepository,
    },
    {
      provide: IGetProductById,
      useClass: GetProductByIdService,
    },
  ],
  exports: [IGetProductById],
})
export class ProductsModule {}
