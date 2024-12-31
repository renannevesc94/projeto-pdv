import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ValidLoginServise {
  constructor(private readonly jwtService: JwtService) {}
  async validarLogin(token: string) {
    const jwtDecode = this.jwtService.verify(token);

    if (jwtDecode) {
      const { role, userId } = jwtDecode;
      return {
        role,
        userId,
      };
    }
    return null;
  }
}
