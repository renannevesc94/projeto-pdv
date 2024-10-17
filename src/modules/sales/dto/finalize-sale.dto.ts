import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { statusSaleEnum } from '../enums/satus-sale.enum';
import { discountTypeEnum } from '../enums/discount-type.enum';

export class FinalizeSaleDto {
  @IsOptional()
  @IsEnum(discountTypeEnum)
  discountType: discountTypeEnum;

  @IsOptional()
  @IsNumber()
  discount: number;

  @IsString()
  paymentMethod: string;

  @IsNumber()
  total: number;

  @IsEnum(statusSaleEnum)
  @IsOptional()
  status?: statusSaleEnum;

  @IsOptional()
  @IsNumber()
  discountValue?: number;
}
