import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { schema } from './schema';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createContext } from './context';

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule, JwtModule],
      inject: [ConfigService],
      useFactory: async () => {
        return {
          schema: schema,
          autoSchemaFile: false,
          playground: true,
          introspection: true,
          context: async ({ req, res }: any) => {
            return await createContext({ req, res });
          },
        };
      },
    }),
  ],
})
export class GraphqlModule {}
