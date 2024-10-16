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
  id: string;

  @IsNumber()
  @IsOptional()
  salesId?: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @IsOptional()
  unitPrice?: number;

  @IsEnum(discountTypeEnum)
  discountType: discountTypeEnum;

  @IsNumber()
  discount: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  discountValue?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  totalPrice?: number;

  @IsUUID()
  @IsNotEmpty()
  productsId: string;
}
