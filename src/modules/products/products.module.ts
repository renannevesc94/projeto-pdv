import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { CreateProductService } from './services/create-product.service';
import { FindAllProductsService } from './services/find-all-products.service';
import { UpdateProductService } from './services/update-product.service';
import { DeleteProductService } from './services/delete-product.service';
import { PrismaProductRepository } from './repositories/prisma-product.repository';
import { IProductRepository } from './repositories/interface-product.repository';

@Module({
  controllers: [ProductsController],
  providers: [
    CreateProductService,
    FindAllProductsService,
    UpdateProductService,
    DeleteProductService,

    {
      provide: IProductRepository,
      useClass: PrismaProductRepository,
    },
  ],
})
export class ProductsModule {}
