import { User } from '../../user.entity';

export abstract class IGetAllRepository {
  abstract getAll(): Promise<User[]>;
}
