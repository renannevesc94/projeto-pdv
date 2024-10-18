/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/modules/users/user.entity';
import { IAuthRepository } from '../repositories/interface-auth.repository';

@Injectable()
export class LoginService {
  constructor(
    private readonly authRepository: IAuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  async authenticateUser(email: string, password: string) {
    const user = await this.authRepository.getByEmail(email.trim());

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const { password, ...result } = user;
        return result;
      }
    }

    return null;
  }

  async login(user: User) {
    if (!user) {
      throw new UnauthorizedException('Acess permission denied');
    }
    const payload = { userId: user.id, role: user.role };
    const jwtToken = this.jwtService.sign(payload, {
      expiresIn: '1d',
    });

    return jwtToken;
  }
}
