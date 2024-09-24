/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ILoginRepository } from '../repositories/interface-login.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/modules/users/user.entity';

@Injectable()
export class LoginService {
  constructor(
    private readonly loginRepository: ILoginRepository,
    private readonly jwtService: JwtService,
  ) {}

  async authenticateUser(email: string, password: string) {
    const user = await this.loginRepository.getByEmail(email.trim());

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
