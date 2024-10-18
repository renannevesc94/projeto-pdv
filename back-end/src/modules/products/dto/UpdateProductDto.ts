import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  description?: string;

  @IsString()
  @IsOptional()
  ean?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  unit?: string;

  @IsOptional()
  @IsPositive()
  cost?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price?: number;

  @IsOptional()
  @IsNumber()
  stock?: number;

  @IsOptional()
  status?: boolean;

  @IsString()
  @IsOptional()
  tags?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  min_stock?: number;

  @IsOptional()
  @IsDate()
  updated_at?: Date;

  @IsInt()
  @IsOptional()
  @IsPositive()
  @IsNotEmpty()
  categoryId?: number;

  @IsInt()
  @IsOptional()
  @IsPositive()
  @IsNotEmpty()
  supplierId?: number;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}
