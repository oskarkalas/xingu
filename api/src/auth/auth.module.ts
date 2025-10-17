import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from '../prisma.service';


@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'change_me_please',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService, AuthResolver, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}
