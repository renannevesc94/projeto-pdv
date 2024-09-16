import { Users } from '@prisma/client';

export abstract class IUpdateUserRepository {
  abstract update(email: string, data: any): Promise<Users>;
}
