import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Roles } from '../../user.entity';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  @ApiProperty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty()
  password: string;

  @IsEnum(Roles)
  @IsOptional()
  @ApiProperty()
  role: Roles;
}
