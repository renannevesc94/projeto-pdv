import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsUUID,
} from 'class-validator';

import { discountTypeEnum } from '../enums/discount-type.enum';

export class SaleItemDto {
  @IsNotEmpty()
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsUUID()
  @IsNotEmpty()
  @IsOptional()
  productsId: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @IsOptional()
  quantity: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @IsOptional()
  unitPrice: number;

  @IsEnum(discountTypeEnum)
  @IsOptional()
  discountType: discountTypeEnum;

  @IsNumber()
  @IsOptional()
  discount: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  discountValue?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  totalPrice: number;
}
