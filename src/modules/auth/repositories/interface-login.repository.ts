import { User } from 'src/modules/users/user.entity';
export abstract class ILoginRepository {
  abstract getByEmail(email: string): Promise<User | null>;
}
