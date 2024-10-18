import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { CreateProductDto } from './dto/CreateProduct.dto';
import { TrimBodyPipe } from 'src/common/utils/trim-body.pipe';
import { UUID } from 'crypto';
import { UpdateProductDto } from './dto/UpdateProductDto';
import { CreateProductService } from './services/create-product.service';
import { FindAllProductsService } from './services/find-all-products.service';
import { UpdateProductService } from './services/update-product.service';
import { DeleteProductService } from './services/delete-product.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly findAllProductsService: FindAllProductsService,
    private readonly updateProductService: UpdateProductService,
    private readonly deleteProductService: DeleteProductService,
  ) {}

  @Post()
  @UsePipes(new TrimBodyPipe())
  async create(@Body() createProductDto: CreateProductDto) {
    return this.createProductService.create(createProductDto);
  }

  @Get()
  async findAllProducts() {
    return await this.findAllProductsService.findAllProducts();
  }

  @Patch(':id')
  @UsePipes(new TrimBodyPipe())
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
