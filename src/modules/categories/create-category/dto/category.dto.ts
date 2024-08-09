import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CategoryDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @Min(6)
  description: string;
}
