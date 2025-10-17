import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwt: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    const auth = req.headers.authorization;

    if (!auth) return false;
    const [, token] = auth.split(' ');

    try {
      req.user = this.jwt.verify(token);
      return true;
    } catch {
      return false;
    }
  }
}
