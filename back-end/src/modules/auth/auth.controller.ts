import {
  Controller,
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
    const token = await this.loginService.login(req.user);
    res.set('Authorization', `Bearer ${token}`);
    return { message: 'Login Successful' };
  }
}
