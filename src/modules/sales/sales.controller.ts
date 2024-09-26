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
import { SalesMediatorServiceService } from './services/sales-mediator-service.service';

@Controller('sales')
export class SalesController {
  constructor(
    private readonly salesMediatorServiceService: SalesMediatorServiceService,
  ) {}

  @Post()
  @UsePipes(new TrimBodyPipe())
  async openSale(@Request() req, @Body() saleItemDto: SaleItemDto) {
    const { userId } = req.user;
    return await this.salesMediatorServiceService.startSale(
      userId,
      saleItemDto,
    );
  }

  @Patch(':saleId')
  @UsePipes(new TrimBodyPipe())
  async addProduct(
    @Body() saleItemDto: SaleItemDto,
    @Param('saleId') saleId: number,
  ) {
    return await this.salesMediatorServiceService.addItem(+saleId, saleItemDto);
  }
}
