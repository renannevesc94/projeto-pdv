import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ProductDto } from 'src/common/dtos/product.dto';
import { GetProductByParamService } from './services/get-product-by-param.service';

@Controller('products')
@ApiTags('Products')
@ApiBearerAuth()
export class ProductsController {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly findAllProductsService: FindAllProductsService,
    private readonly updateProductService: UpdateProductService,
    private readonly deleteProductService: DeleteProductService,
    private readonly getProductByParamService: GetProductByParamService,
  ) {}

  /** Cria um novo produto */
  @Post()
  @UsePipes(new TrimBodyPipe())
  async create(@Body() createProductDto: CreateProductDto) {
    return this.createProductService.create(createProductDto);
  }

  /** Busca todos os produtos */
  @Get()
  async findAllProducts() {
    return await this.findAllProductsService.findAllProducts();
  }

  @Get('/getproduct')
  async getProductsByParam(@Query() query: Partial<ProductDto>) {
    return await this.getProductByParamService.getProductByParam(query);
  }

  /** Atualiza um produto */
  @Patch(':id')
  @UsePipes(new TrimBodyPipe())
  async updateProduct(
    @Param('id') id: UUID,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return await this.updateProductService.updateProduct(id, updateProductDto);
  }

  /** Deleta um produto */
  @Delete(':id')
  async delete(@Param('id') id: UUID) {
    return await this.deleteProductService.deleteProduct(id);
  }
}
