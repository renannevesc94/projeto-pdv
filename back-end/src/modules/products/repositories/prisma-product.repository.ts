import { PrismaService } from 'src/common/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/CreateProduct.dto';
import { IProductRepository } from './interface-product.repository';
import { Product } from '../products.entity';
import { UUID } from 'crypto';
import { UpdateProductDto } from '../dto/UpdateProductDto';
import { ProductDto } from 'src/common/dtos/product.dto';

@Injectable()
export class PrismaProductRepository implements IProductRepository {
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

  async update(
    productId: UUID,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return await this.prisma.products.update({
      where: {
        id: productId,
      },
      data: {
        ...updateProductDto,
      },
    });
  }

  async findAllProducts(): Promise<Product[]> {
    return await this.prisma.products.findMany();
  }

  async getProductById(id: string): Promise<ProductDto> {
    return await this.prisma.products.findFirst({ where: { id } });
  }

  async delete(productId: UUID): Promise<Product> {
    return await this.prisma.products.delete({ where: { id: productId } });
  }
}
