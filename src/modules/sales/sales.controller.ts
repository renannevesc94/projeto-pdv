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
import { SaleItemsService } from './services/sale-items.service';
import { SaleItemDto } from './dto/sale-item.dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly saleItemsService: SaleItemsService) {}

  @Post()
  @UsePipes(new TrimBodyPipe())
  async openSale(@Request() req, @Body() saleItemDto: SaleItemDto) {
    const { userId } = req.user;
    return await this.saleItemsService.startSaleWithProduct(
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
    return await this.saleItemsService.addItem(+saleId, saleItemDto);
  }
}
