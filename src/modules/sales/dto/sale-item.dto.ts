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

  @IsOptional()
  @IsEnum(discountTypeEnum)
  discountType?: discountTypeEnum;

  @IsOptional()
  discount?: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  unitPrice: number;

  @IsNumber()
  @IsPositive()
  totalPrice: number;

  @IsUUID()
  @IsNotEmpty()
  productsId: string;
}
