import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsOptional()
  id: number;
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty({
    message: 'description must be longer than or equal to 5 characters',
  })
  @IsString()
  description: string;
}
