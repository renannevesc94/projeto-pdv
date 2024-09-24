import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { IcreateProductRepository } from './repositories/interface-create-product.repository';
import { PrismaCreateProductRepository } from './repositories/prisma-create-product.repository';
import { IFindAllProductsRepository } from './repositories/interface-find-all-products.repository';
import { PrismaFindAllProductsRepository } from './repositories/prisma-find-all-products.repository';
import { IUpdateProductRepository } from './repositories/interface-update-product.repository';
import { PrismaUpdateProductRepository } from './repositories/prisma-update-product.repository';
import { IDeleteProductRepository } from './repositories/interface-delete-product.repository';
import { PrismaDeleteProductRepository } from './repositories/prisma-delete-product.repository';
import { CreateProductService } from './services/create-product.service';
import { FindAllProductsService } from './services/find-all-products.service';
import { UpdateProductService } from './services/update-product.service';
import { DeleteProductService } from './services/delete-product.service';

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
