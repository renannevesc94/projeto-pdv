import { PrismaClient } from '@prisma/client';
import { Roles } from 'src/modules/users/user.entity';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seedTestDatabase() {
  await prisma.$executeRaw`TRUNCATE TABLE users, products, categories, suppliers RESTART IDENTITY CASCADE`;

  const user = {
    name: 'admin',
    email: 'admin@projetopdv.com',
    password: bcrypt.hashSync('12345678', 10),
    role: 'ADMINISTRADOR' as Roles,
  };

  const categories = {
    description: 'Category Test',
  };

  const suppliers = {
    name: 'Supplier Test',
    description: 'Supplier Test Description',
  };

  await prisma.categories.upsert({
    where: { description: categories.description },
    update: {},
    create: categories,
  });

  await prisma.suppliers.upsert({
    where: { name: suppliers.name },
    update: {},
    create: suppliers,
  });

  await prisma.users.upsert({
    where: { email: user.email },
    update: {},
    create: user,
  });
}

seedTestDatabase()
  .then(() => console.log('Database successfully seeded'))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
