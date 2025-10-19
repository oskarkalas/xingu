import { AuthService } from './auth.service';
import { builder } from '../graphql/builder';
import { PrismaService } from '../prisma.service';

export function registerAuthResolvers() {
  const prisma = new PrismaService();
  prisma.$connect().catch(console.error);

  builder.mutationField('register', (t) =>
    t.string({
      args: {
        email: t.arg.string({ required: true }),
        password: t.arg.string({ required: true }),
        name: t.arg.string({ required: false }),
      },
      resolve: async (_root, args, _ctx) => {
        const { JwtService } = await import('@nestjs/jwt');
        const { ConfigService } = await import('@nestjs/config');
        const { AuthService } = await import('./auth.service');

        const jwtService = new JwtService({
          secret: process.env.JWT_SECRET || 'default-secret-change-me'
        });
        const configService = new ConfigService();
        const authService = new AuthService(prisma, jwtService, configService);

        const token = await authService.register(args.email, args.password, args.name);
        console.log('Registration - Using JWT_SECRET:', (process.env.JWT_SECRET || 'default-secret-change-me').substring(0, 10) + '...');
        return token.accessToken;
      },
    })
  );

  builder.mutationField('login', (t) =>
    t.string({
      args: {
        email: t.arg.string({ required: true }),
        password: t.arg.string({ required: true }),
      },
      resolve: async (_root, args, _ctx) => {
        const { JwtService } = await import('@nestjs/jwt');
        const { ConfigService } = await import('@nestjs/config');
        const { AuthService } = await import('./auth.service');

        const jwtService = new JwtService({
          secret: process.env.JWT_SECRET || 'default-secret'
        });
        const configService = new ConfigService();
        const authService = new AuthService(prisma, jwtService, configService);

        const token = await authService.loginWithPassword(args.email, args.password);
        return token.accessToken;
      },
    })
  );

  builder.queryField('me', (t) =>
    t.prismaField({
      type: 'User',
      nullable: true,
      resolve: async (query, _root, _args, ctx) => {
        console.log('Context user:', ctx.user);

        if (!ctx.user) {
          throw new Error('Not authenticated');
        }

        const user = await prisma.user.findUnique({
          where: { email: ctx.user.email },
          ...query,
        });

        if (!user) {
          throw new Error('User not found');
        }

        return user;
      },
    })
  );
}
