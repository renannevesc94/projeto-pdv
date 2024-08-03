import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LoginService } from './login/login.service';
import { AuthCredentialsDto } from './login/dto/auth-credentials-dto';
import { TrimBodyPipe } from 'src/common/utils/trim-body.pipe';
import { ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private loginService: LoginService) {}

  @Post('/login')
  @ApiResponse({ status: 200, description: 'Successful login' })
  @HttpCode(HttpStatus.OK)
  @UsePipes(new TrimBodyPipe(), new ValidationPipe())
  async login(@Body() authCredentialsDto: AuthCredentialsDto) {
    return await this.loginService.login(authCredentialsDto);
  }
}
