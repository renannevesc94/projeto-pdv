import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  Request,
  UsePipes,
} from '@nestjs/common';
import { SaleItemDto } from './sale-items/dto/sale-item.dto';
import { SaleItemsService } from './sale-items/sale-items.service';
import { TrimBodyPipe } from 'src/common/utils/trim-body.pipe';

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
