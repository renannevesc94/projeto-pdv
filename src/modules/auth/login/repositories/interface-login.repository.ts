import { User } from 'src/modules/users/user.entity';
export abstract class ILoginRepository {
  abstract getUser(
    email: string,
  ): Promise<Pick<User, 'email' | 'password'> | null>;
}
