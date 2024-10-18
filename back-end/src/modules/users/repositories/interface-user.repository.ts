import { CreateUserDto } from '../dto/create-user-dto';
import { User } from '../user.entity';

export abstract class IUserRepository {
  abstract create(createUserDto: CreateUserDto): Promise<User>;
  abstract delete(email: string): Promise<User>;
  abstract findAll(): Promise<User[]>;
  abstract update(email: string, data: any): Promise<User>;
}
