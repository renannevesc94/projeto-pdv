import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }

  handleRequest<TUser = any>(err: any, user: any): TUser {
    if (!user) {
      throw err || new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
