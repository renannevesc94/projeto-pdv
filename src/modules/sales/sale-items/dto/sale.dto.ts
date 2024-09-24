import { IsEnum, IsOptional, IsNumber } from 'class-validator';
import { SaleItemDto } from './sale-item.dto';

export enum StatusSale {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  CANCELED = 'CANCELED',
}
export class SaleDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsNumber()
  total?: number;

  @IsOptional()
  paymentMethod?: string;

  @IsEnum(StatusSale)
  status: StatusSale;

  @IsOptional()
  created_at?: Date;

  @IsOptional()
  updated_at?: Date;

  @IsOptional()
  SalesItems: SaleItemDto[];
}
