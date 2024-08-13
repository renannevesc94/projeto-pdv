import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class UpdateCategoryDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  description: string;
}
