import { PrismaClient } from '@prisma/client';
import { Roles } from 'src/modules/users/user.entity';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seedTestDatabase() {
  await prisma.$executeRaw`TRUNCATE TABLE users, sales ,sales_items, products, categories, suppliers RESTART IDENTITY CASCADE`;

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

  const product = {
    description: 'Product Test',
    ean: '9874563210123',
    unit: 'unit',
    cost: 10.5,
    price: 15,
    stock: 100,
    status: true,
    tags: 'test,product',
    min_stock: 5,
    categoryId: 1,
    supplierId: 1,
    imageUrl: 'https://example.com/product-image.jpg',
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

  await prisma.products.upsert({
    where: { ean: product.ean },
    update: {},
    create: product,
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
