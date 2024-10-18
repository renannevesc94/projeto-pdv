import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ISaleRepository } from '../repositories/interface-sale.repository';
import { statusSaleEnum } from '../enums/satus-sale.enum';

@Injectable()
export class CancelSaleService {
  constructor(private readonly saleRepository: ISaleRepository) {}

  async cancelSale(id: number, role: string) {
    if (role === 'OPERADOR') {
      throw new UnauthorizedException('Acess permission denied');
    }
    return await this.saleRepository.updateSale(id, {
      status: statusSaleEnum.CANCELED,
    });
  }
}
