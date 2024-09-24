import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsUUID,
} from 'class-validator';

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
  unitPrice: number;

  @IsNumber()
  @IsPositive()
  totalPrice: number;

  @IsUUID()
  @IsNotEmpty()
  productsId: string;
}
