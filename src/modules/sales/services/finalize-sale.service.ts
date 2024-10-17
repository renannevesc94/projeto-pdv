import { BadRequestException, Injectable } from '@nestjs/common';
import { FinalizeSaleDto } from '../dto/finalize-sale.dto';
import { IApplyDiscount } from '../interfaces/interface-apply-discount';
import { SaleDto } from '../dto/sale.dto';
import { SaleItemDto } from '../dto/sale-item.dto';
import { ISaleRepository } from '../repositories/interface-sale.repository';
import { statusSaleEnum } from '../enums/satus-sale.enum';

@Injectable()
export class FinalizeSaleService {
  constructor(
    private readonly applyDiscountService: IApplyDiscount,
    private saleRepository: ISaleRepository,
  ) {}

  private calculateTotalAmount(saleItems: SaleItemDto[]) {
    return saleItems.reduce((acc, item) => acc + item.totalPrice, 0);
  }

  async finalizeSale(sale: SaleDto, finalizeSaleDto: FinalizeSaleDto) {
    if (sale.status !== statusSaleEnum.OPEN) {
      throw new BadRequestException(`Sale already ${sale.status}`);
    }

    const totalPrice = this.calculateTotalAmount(sale.SalesItems);

    const saleWithDiscount = await this.applyDiscountService.apllyDiscount(
      finalizeSaleDto.discountType,
      finalizeSaleDto.discount,
      totalPrice,
    );

    if (saleWithDiscount.totalPrice != finalizeSaleDto.total) {
      throw new BadRequestException('Total price does not match');
    }

    finalizeSaleDto.status = statusSaleEnum.CLOSED;

    return await this.saleRepository.finalizeSale(sale.id, finalizeSaleDto);
  }
}
