import { Injectable } from '@nestjs/common';
import { UpdateSaleDto } from '../dto/update-sale.dto';

@Injectable()
export class SalesManagementService {
  constructor() {}

  async updateSale(updateSaleDto: UpdateSaleDto) {
    console.log(updateSaleDto);
  }
}
