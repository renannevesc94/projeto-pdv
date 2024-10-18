import { IsEnum, IsOptional, IsNumber } from 'class-validator';

export enum StatusSale {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  CANCELED = 'CANCELED',
}
export class UpdateSaleDto {
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
}
