import { PrismaClient } from '@prisma/client';
import { Roles } from 'src/modules/users/user.entity';
import * as bycrypt from 'bcrypt';

export async function seedTestDatabase() {
  const prisma = new PrismaClient();
  const users = [
    {
      name: 'Admin',
      email: 'admin@projetopdv.com',
      password: bycrypt.hashSync('12345678', 10),
      role: 'ADMINISTRADOR',
    },

    {
      name: 'Supervisor',
      email: 'supervisor@projetopdv.com',
      password: bycrypt.hashSync('12345678', 10),
      role: 'SUPERVISOR',
    },

    {
      name: 'Operador',
      email: 'operador@projetopdv.com',
      password: bycrypt.hashSync('12345678', 10),
      role: 'OPERADOR',
    },
  ];

  await prisma.user.deleteMany();
  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {
        name: user.name,
        password: user.password,
        role: user.role as Roles,
      },
      create: {
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role as Roles,
      },
    });
  }

  const categories = [
    {
      description: 'Category 1',
    },
    {
      description: 'Category 2',
    },
  ];
  await prisma.category.deleteMany();
  await prisma.$executeRaw`ALTER SEQUENCE category_id_seq RESTART WITH 1`;

  for (const category of categories) {
    await prisma.category.upsert({
      where: { description: category.description },
      update: {
        description: category.description,
      },
      create: {
        description: category.description,
      },
    });
  }
}
