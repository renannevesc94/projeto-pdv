import { Injectable } from '@nestjs/common';
import { ISaleRepository } from '../repositories/interface-sale.repository';

@Injectable()
export class StartSaleServiceService {
  constructor(private readonly saleRepository: ISaleRepository) {}

  async startSale(userId: string) {
    return await this.saleRepository.startSaleWithProduct(userId);
  }
}
