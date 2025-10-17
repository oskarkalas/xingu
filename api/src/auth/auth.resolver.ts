import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private auth: AuthService) {}

  @Mutation(() => String)
  async register(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name', { nullable: true }) name?: string,
  ) {
    const token = await this.auth.register(email, password, name);
    return token.accessToken;
  }

  @Mutation(() => String)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const token = await this.auth.login(email, password);
    return token.accessToken;
  }

  @Query(() => String)
  @UseGuards(JwtAuthGuard)
  async me(@Context() ctx: any) {
    return `Logged in as ${ctx.req.user.email}`;
  }
}
