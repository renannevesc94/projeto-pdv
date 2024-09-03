import { PrismaService } from 'src/common/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/CreateProduct.dto';

@Injectable()
export class PrismaCreateProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(productData: CreateProductDto): Promise<any> {
    return await this.prisma.products.create({
      data: {
        description: productData.description,
        ean: productData.ean,
        unit: productData.unit,
        cost: productData.cost,
        price: productData.price,
        stock: productData.stock,
        status: productData.status,
        tags: productData.tags,
        min_stock: productData.min_stock,
        category: { connect: { id: productData.categoryId } },
        supplier: { connect: { id: productData.supplierId } },
        imageUrl: productData.imageUrl || '',
      },
    });
  }
}
