import { Injectable } from '@nestjs/common';
import { ISaleRepository } from '../repositories/interface-sale.repository';
import { SaleDto } from '../dto/sale.dto';

@Injectable()
export class GetSalesByParamService {
  constructor(private readonly salesRepository: ISaleRepository) {}

  async getSalesByParams(param: Partial<SaleDto>) {
    if (param.id) {
      const saleId = +param.id;
      return await this.salesRepository.getSalesByParam({ id: saleId });
    }
    return await this.salesRepository.getSalesByParam(param);
  }
}
