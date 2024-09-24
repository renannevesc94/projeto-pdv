import { CreateUserDto } from '../dto/create-user-dto';
import { User } from '../user.entity';

export abstract class ICreateUserRepository {
  abstract create(createUserDto: CreateUserDto): Promise<User>;
}
