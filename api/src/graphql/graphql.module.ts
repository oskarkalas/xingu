import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Request, Response } from 'express';
import { schema } from './schema';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        secret: process.env.JWT_SECRET!,
        signOptions: {
          expiresIn: Number(process.env.JWT_EXPIRES_IN!) || 3600,
        },
      }),
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule, JwtModule],
      inject: [ConfigService],
      useFactory: async () => {
        const { JwtService } = await import('@nestjs/jwt');
        const jwtService = new JwtService({
          secret: process.env.JWT_SECRET!,
        });

        return {
          schema: schema,
          autoSchemaFile: false,
          playground: true,
          introspection: true,
          context: ({ req, res }: { req: Request; res: Response }) => {
            const authHeader = req.headers.authorization;
            let user = null;

            console.log('Auth header:', authHeader); // Debug

            if (authHeader && authHeader.startsWith('Bearer ')) {
              const token = authHeader.substring(7);
              console.log('Token:', token.substring(0, 20) + '...'); // Debug

              try {
                user = jwtService.verify(token);
                console.log('Verified user:', user); // Debug
              } catch (error) {
                console.error('Token verification failed:', error);
              }
            }

            return { req, res, user };
          },
        };
      },
    }),
  ],
})
export class GraphqlModule {}
