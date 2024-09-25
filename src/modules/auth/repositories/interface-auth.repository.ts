import { User } from 'src/modules/users/user.entity';
export abstract class IAuthRepository {
  abstract getByEmail(email: string): Promise<User | null>;
}
