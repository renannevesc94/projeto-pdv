import { Injectable } from '@nestjs/common';
import { ISaleRepository } from '../repositories/interface-sale.repository';

@Injectable()
export class StartSaleService {
  constructor(private readonly saleRepository: ISaleRepository) {}

  async startSale(userId: string) {
    return await this.saleRepository.startSaleWithProduct(userId);
  }
}
