import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  description: string;
}
