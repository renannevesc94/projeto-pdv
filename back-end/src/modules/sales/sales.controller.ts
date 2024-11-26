import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Request,
  UsePipes,
} from '@nestjs/common';

import { TrimBodyPipe } from 'src/common/utils/trim-body.pipe';
import { SaleItemDto } from './dto/sale-item.dto';
import { MediatorSalesService } from './services/mediator-sales.service';
import { FinalizeSaleDto } from './dto/finalize-sale.dto';
import { CancelSaleService } from './services/cancel-sale.service';
import { GetSalesByParamService } from './services/get-sales-by-param.service';
import { SaleDto } from './dto/sale.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('sales')
@ApiTags('Sales')
@ApiBearerAuth()
export class SalesController {
  constructor(
    private readonly mediatorSalesService: MediatorSalesService,
    private readonly cancelSaleService: CancelSaleService,
    private readonly getAllSalesService: GetSalesByParamService,
  ) {}

  /** Iniciar uma venda
   *@throws {404} Sale not found
   *@throws {400} Bad request
   */
  @Post()
  @UsePipes(new TrimBodyPipe())
  async openSale(@Req() req, @Body() saleItemDto: SaleItemDto) {
    const { userId } = req.user;
    return await this.mediatorSalesService.startSale(userId, saleItemDto);
  }

  /** Finalizar uma venda */
  @Patch(':saleId')
  @UsePipes(new TrimBodyPipe())
  async updateSale(
    @Param('saleId') saleId: number,
    @Body() finalizeDto: FinalizeSaleDto,
  ) {
    return await this.mediatorSalesService.finalizeSale(+saleId, finalizeDto);
  }

  /** Adicionar ou editar um produto de uma venda */
  @Patch(':saleId/items')
  @UsePipes(new TrimBodyPipe())
  async addProduct(
    @Body() saleItemDto: SaleItemDto,
    @Param('saleId') saleId: number,
  ) {
    return await this.mediatorSalesService.addItem(+saleId, saleItemDto);
  }

  /** Cancelar uma venda */
  @Patch(':saleId/cancel')
  @UsePipes(new TrimBodyPipe())
  async cancelSale(@Request() req, @Param('saleId') saleId: number) {
    const { role } = req.user;
    return this.cancelSaleService.cancelSale(+saleId, role);
  }

  /** Buscar vendas */
  @Get()
  async getSales(@Query() params: Partial<SaleDto>) {
    return await this.getAllSalesService.getSalesByParams(params);
  }
}
