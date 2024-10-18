import { IsEnum, IsOptional, IsNumber, IsPositive } from 'class-validator';
import { SaleItemDto } from './sale-item.dto';
import { discountTypeEnum } from '../enums/discount-type.enum';
import { statusSaleEnum } from '../enums/satus-sale.enum';

export class SaleDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsNumber()
  total?: number;

  @IsOptional()
  paymentMethod?: string;

  @IsEnum(statusSaleEnum)
  @IsOptional()
  status?: statusSaleEnum;

  @IsOptional()
  @IsEnum(discountTypeEnum)
  discountType?: discountTypeEnum;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  discountValue?: number;

  @IsOptional()
  discount?: number;

  @IsOptional()
  created_at?: Date;

  @IsOptional()
  updated_at?: Date;

  @IsOptional()
  SalesItems: SaleItemDto[];
}
