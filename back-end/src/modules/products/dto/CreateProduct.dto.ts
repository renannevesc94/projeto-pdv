import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  ean: string;

  @IsString()
  @IsNotEmpty()
  unit: string;

  @IsNumber()
  @IsPositive()
  @IsPositive()
  cost: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @IsNumber()
  stock: number;

  @IsBoolean()
  status: boolean;

  @IsString()
  tags: string;

  @IsPositive()
  min_stock: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  categoryId: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  supplierId: number;

  @IsString()
  @IsOptional()
  imageUrl: string;
}
