import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable } from '@nestjs/common';
import { LoginService } from '../services/login.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly loginService: LoginService) {
    super({
      usernameField: 'email',
    });
  }
  async validate(email: string, password: string) {
    const user = this.loginService.authenticateUser(email, password);
    return user;
  }
}
