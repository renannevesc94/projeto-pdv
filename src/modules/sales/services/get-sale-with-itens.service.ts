import { BadRequestException, Injectable } from '@nestjs/common';
import { ISaleRepository } from '../repositories/interface-sale.repository';
import { SaleDto } from '../dto/sale.dto';

@Injectable()
export class GetSalesWithItemsService {
  constructor(private readonly saleRepository: ISaleRepository) {}

  async getSalesWithItems(saleId: number): Promise<SaleDto> {
    const sale = await this.saleRepository.getSalesWithItems(saleId);
    if (sale.status != 'OPEN') {
      throw new BadRequestException('Sale already closed');
    }
    return sale;
  }
}
