import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  Request,
  UsePipes,
} from '@nestjs/common';

import { TrimBodyPipe } from 'src/common/utils/trim-body.pipe';
import { SaleItemDto } from './dto/sale-item.dto';
import { MediatorSalesService } from './services/mediator-sales.service';
import { FinalizeSaleDto } from './dto/finalize-sale.dto';
import { CancelSaleService } from './services/cancel-sale.service';

@Controller('sales')
export class SalesController {
  constructor(
    private readonly mediatorSalesService: MediatorSalesService,
    private readonly cancelSaleService: CancelSaleService,
  ) {}

  @Post()
  @UsePipes(new TrimBodyPipe())
  async openSale(@Request() req, @Body() saleItemDto: SaleItemDto) {
    const { userId } = req.user;
    return await this.mediatorSalesService.startSale(userId, saleItemDto);
  }

  @Patch(':saleId')
  @UsePipes(new TrimBodyPipe())
  async updateSale(
    @Param('saleId') saleId: number,
    @Body() finalizeDto: FinalizeSaleDto,
  ) {
    return await this.mediatorSalesService.finalizeSale(+saleId, finalizeDto);
  }

  @Patch(':saleId/items')
  @UsePipes(new TrimBodyPipe())
  async addProduct(
    @Body() saleItemDto: SaleItemDto,
    @Param('saleId') saleId: number,
  ) {
    return await this.mediatorSalesService.addItem(+saleId, saleItemDto);
  }

  @Patch(':saleId/cancel')
  @UsePipes(new TrimBodyPipe())
  async cancelSale(@Request() req, @Param('saleId') saleId: number) {
    const { role } = req.user;
    return this.cancelSaleService.cancelSale(+saleId, role);
  }
}
