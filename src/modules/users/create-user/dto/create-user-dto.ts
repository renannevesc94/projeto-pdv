import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Roles } from '../../user.entity';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEnum(Roles)
  role: Roles;
}
