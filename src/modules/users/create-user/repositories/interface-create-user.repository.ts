import { User } from '../../user.entity';
import { CreateUserDto } from '../dto/create-user-dto';

export abstract class ICreateUserRepository {
  abstract create(createUserDto: CreateUserDto): Promise<User>;
}
