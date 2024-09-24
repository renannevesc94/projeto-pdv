import { User } from '../user.entity';

export abstract class IDeleteUserRepository {
  abstract delete(email: string): Promise<User>;
}
