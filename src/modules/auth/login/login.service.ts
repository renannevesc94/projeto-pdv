import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ILoginRepository } from './repositories/interface-login.repository';
import { AuthCredentialsDto } from './dto/auth-credentials-dto';

@Injectable()
export class LoginService {
  constructor(private readonly loginRepository: ILoginRepository) {}

  async login(authCredentialsDto: AuthCredentialsDto) {
    const { email, password } = authCredentialsDto;
    const user = await this.loginRepository.getUser(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return new HttpException('Login successful', HttpStatus.OK);
      }
    }
    throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
  }
}
