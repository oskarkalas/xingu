import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // === Permissions ===
  const permissions = await prisma.permission.createMany({
    data: [
      { name: 'USER_READ', description: 'Can view users' },
      { name: 'USER_WRITE', description: 'Can modify users' },
      { name: 'ROLE_MANAGE', description: 'Can create, edit, and delete roles' },
      { name: 'PERMISSION_MANAGE', description: 'Can create, edit, and delete permissions' },
    ],
    skipDuplicates: true,
  });

  // === Roles ===
  const adminRole = await prisma.role.upsert({
    where: { name: 'admin' },
    update: {},
    create: {
      name: 'admin',
      description: 'Administrator with full access',
    },
  });

  const userRole = await prisma.role.upsert({
    where: { name: 'user' },
    update: {},
    create: {
      name: 'user',
      description: 'Standard user with limited access',
    },
  });

  // === Assign permissions to roles ===
  const allPermissions = await prisma.permission.findMany();
  await prisma.rolePermission.createMany({
    data: allPermissions.map((p) => ({
      roleId: adminRole.id,
      permissionId: p.id,
    })),
    skipDuplicates: true,
  });

  // === Users ===
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: '$2a$10$examplehashforadmin', // bcrypt hash placeholder
      image: 'https://i.pravatar.cc/150?u=admin',
    },
  });

  const normalUser = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      name: 'Normal User',
      password: '$2a$10$examplehashforuser',
      image: 'https://i.pravatar.cc/150?u=user',
    },
  });

  // === Assign roles ===
  await prisma.userRole.createMany({
    data: [
      { userId: admin.id, roleId: adminRole.id },
      { userId: normalUser.id, roleId: userRole.id },
    ],
    skipDuplicates: true,
  });

  // === Accounts (OAuth providers) ===
  await prisma.account.createMany({
    data: [
      {
        provider: 'google',
        providerAccountId: 'google-12345',
        userId: admin.id,
        accessToken: 'access-token-123',
        refreshToken: 'refresh-token-123',
      },
      {
        provider: 'github',
        providerAccountId: 'github-67890',
        userId: normalUser.id,
        accessToken: 'access-token-456',
        refreshToken: 'refresh-token-456',
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(() => {
    console.log('✅ Database seeded successfully!');
  })
  .catch((e) => {
    console.error('❌ Error while seeding:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
