import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Roles } from '../../user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;

  @IsEnum(Roles)
  @ApiProperty()
  role: Roles;
}
