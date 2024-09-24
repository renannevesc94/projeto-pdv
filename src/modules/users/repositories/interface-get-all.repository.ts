import { User } from '../user.entity';

export abstract class IGetAllRepository {
  abstract findAll(): Promise<User[]>;
}
