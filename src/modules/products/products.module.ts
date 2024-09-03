import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { CreateProductService } from './create-product/create-product.service';
import { IcreateProductRepository } from './create-product/repositories/interface-create-product.repository';
import { PrismaCreateProductRepository } from './create-product/repositories/prisma-create-product.repository';
import { FindAllProductsService } from './find-all-products/find-all-products.service';
import { IFindAllProductsRepository } from './find-all-products/repositories/interface-find-all-products.repository';
import { PrismaFindAllProductsRepository } from './find-all-products/repositories/prisma-find-all-products.repository';
import { UpdateProductService } from './update-product/update-product.service';
import { IUpdateProductRepository } from './update-product/repositories/interface-update-product.repository';
import { PrismaUpdateProductRepository } from './update-product/repositories/prisma-update-product.repository';
import { DeleteProductService } from './delete-product/delete-product.service';
import { IDeleteProductRepository } from './delete-product/repositories/interface-delete-product.repository';
import { PrismaDeleteProductRepository } from './delete-product/repositories/prisma-delete-product.repository';

@Module({
  controllers: [ProductsController],
  providers: [
    CreateProductService,
    FindAllProductsService,
    UpdateProductService,
    DeleteProductService,

    {
      provide: IcreateProductRepository,
      useClass: PrismaCreateProductRepository,
    },
    {
      provide: IFindAllProductsRepository,
      useClass: PrismaFindAllProductsRepository,
    },
    {
      provide: IUpdateProductRepository,
      useClass: PrismaUpdateProductRepository,
    },
    {
      provide: IDeleteProductRepository,
      useClass: PrismaDeleteProductRepository,
    },
  ],
})
export class ProductsModule {}
