import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';

import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginService } from './services/login.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Response } from 'express';
import { SkipAuth } from 'src/common/decorators/skipAuth.decorator';
import { AuthCredentialsDto } from './dto/auth-credentials-dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private loginService: LoginService) {}

  /** Realiza o login do usuário e retorna o token JWT.
   * @throws {401} Unauthorized
   */
  @Post('/login')
  @ApiBody({
    description: 'Dados de login do usuário (email e senha)',
    type: AuthCredentialsDto,
  })
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @SkipAuth()
  async login(@Req() req: any, @Res({ passthrough: true }) res: Response) {
    const { token, role } = await this.loginService.login(req.user);

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'lax',
    });

    res.cookie('authData', JSON.stringify({ role, userId: req.user.id }), {
      httpOnly: false,
      sameSite: 'lax',
      maxAge: 120 * 60 * 1000,
    });

    process.env.NODE_ENV !== 'production' &&
      res.header('Authorization', `Bearer ${token}`);

    return { message: 'Login Successful', role };
  }

  @Get('/validate')
  async validate(@Req() req: any, @Res({ passthrough: true }) res: Response) {
    res.cookie(
      'authData',
      JSON.stringify({ role: req.user.role, userId: req.user.id }),
      {
        httpOnly: false,
        sameSite: 'lax',
        maxAge: 120 * 60 * 1000,
      },
    );
  }
}
