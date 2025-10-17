import { AuthService } from './auth.service';
import { builder } from '../graphql/builder';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma.service';

export function registerAuthResolvers() {
  const prisma = new PrismaService();
  const jwtService = new JwtService({ secret: 'mysecret' });
  const configService = new ConfigService();
  const authService = new AuthService(prisma, jwtService, configService);

  builder.mutationField('register', (t) =>
    t.string({
      args: {
        email: t.arg.string({ required: true }),
        password: t.arg.string({ required: true }),
        name: t.arg.string({ required: false }),
      },
      resolve: async (_root, args, _ctx) => {
        const token = await authService.register(args.email, args.password, args.name);
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
        const token = await authService.loginWithPassword(args.email, args.password);
        return token.accessToken;
      },
    })
  );

  builder.queryField('me', (t) =>
    t.string({
      resolve: async (_root, _args, ctx) => {
        if (!ctx.user) {
          throw new Error('Not authenticated');
        }
        return `Logged in as ${ctx.user.email}`;
      },
    })
  );
}
