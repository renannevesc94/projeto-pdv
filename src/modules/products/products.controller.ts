import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductService } from './create-product/create-product.service';
import { CreateProductDto } from './create-product/dto/CreateProduct.dto';
import { TrimBodyPipe } from 'src/common/utils/trim-body.pipe';
import { FindAllProductsService } from './find-all-products/find-all-products.service';
import { UpdateProductService } from './update-product/update-product.service';
import { UUID } from 'crypto';
import { UpdateProductDto } from './update-product/dto/UpdateProductDto';
import { DeleteProductService } from './delete-product/delete-product.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly findAllProductsService: FindAllProductsService,
    private readonly updateProductService: UpdateProductService,
    private readonly deleteProductService: DeleteProductService,
  ) {}

  @Post()
  @UsePipes(new TrimBodyPipe(), new ValidationPipe())
  async create(@Body() createProductDto: CreateProductDto) {
    return this.createProductService.create(createProductDto);
  }

  @Get()
  async findAllProducts() {
    return await this.findAllProductsService.findAllProducts();
  }

  @Patch(':id')
  @UsePipes(new TrimBodyPipe(), new ValidationPipe())
  async updateProduct(
    @Param('id') id: UUID,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return await this.updateProductService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: UUID) {
    return await this.deleteProductService.deleteProduct(id);
  }
}
