import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';

import { ApiResponse } from '@nestjs/swagger';
import { LoginService } from './login/login.service';
import { LocalAuthGuard } from './login/local-auth.guard';
import { Response } from 'express';
import { SkipAuth } from 'src/common/decorators/skipAuth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private loginService: LoginService) {}

  @Post('/login')
  @ApiResponse({ status: 200, description: 'Successful login' })
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @SkipAuth()
  async login(@Req() req: any, @Res() res: Response) {
    const token = await this.loginService.login(req.user);
    res.header('Authorization', `Bearer ${token}`);
    res.json({ message: 'Login Successful' });
  }
}
