import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';

import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthService {
  private googleClient: OAuth2Client;

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {
    this.googleClient = new OAuth2Client(this.config.get<string>('GOOGLE_CLIENT_ID'));
  }

  // registrace klasicky
  async register(email: string, password: string, name?: string | null): Promise<any> {
    const existing = await this.prisma.user.findUnique({ where: { email } });
    if (existing) throw new ConflictException('User already exists');

    const hashed = await bcrypt.hash(password, 12);
    const user = await this.prisma.user.create({
      data: { email, password: hashed, name },
    });

    return this.createTokensForUser(user);
  }

  // ověření email/password
  async validateUserByPassword(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: {
        roles: {
          include: {
            role: true // Načte celý objekt role včetně name
          }
        }
      }    });

    console.log(user?.roles.map(value => value));
    if (!user || !user.password) return null;
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return null;
    return user;
  }

  async loginWithPassword(email: string, password: string) {
    const user = await this.validateUserByPassword(email, password);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    return this.createTokensForUser(user);
  }

  // ověření Google id_token (posílá klient)
  async loginWithGoogleIdToken(idToken: string) {
    // verify token
    const ticket = await this.googleClient.verifyIdToken({
      idToken,
      audience: this.config.get<string>('GOOGLE_CLIENT_ID'),
    });
    const payload = ticket.getPayload();
    if (!payload) throw new UnauthorizedException('Invalid Google token');

    const email = payload.email;
    const name = payload.name;
    const picture = payload.picture;
    const providerAccountId = payload.sub; // google user id

    // najdi usera podle emailu nebo vytvoř nového
    let user = null;
    if (email) {
      user = await this.prisma.user.findUnique({ where: { email } });
    }

    if (!user) {
      // pokud email není, můžeme založit user bez emailu, ale doporučuju email vyžadovat na clientovi
      user = await this.prisma.user.create({
        data: {
          email: email || undefined,
          name,
          image: picture,
        },
      });
    } else {
      // aktualizuj jméno/obrázek pokud chybí / liší se
      await this.prisma.user.update({
        where: { id: user.id },
        data: { name: name ?? user.name, image: picture ?? user.image },
      });
    }

    // vytvoř nebo aktualizuj Account záznam (provider = 'google')
    await this.prisma.account.upsert({
      where: {
        provider_providerAccountId: {
          provider: 'google',
          providerAccountId,
        },
      } as any,
      create: {
        provider: 'google',
        providerAccountId,
        accessToken: undefined,
        refreshToken: undefined,
        userId: user.id,
      },
      update: {
        userId: user.id,
        // případně aktualizovat tokeny pokud posíláš
      },
    });

    return this.createTokensForUser(user);
  }

  // vytvoří JWT access token (a případně refresh token)
  private createTokensForUser(user: any) {
    const payload = { sub: user.id, email: user.email, role: user.role };
    const accessToken = this.jwtService.sign(payload);
    // pokud chceš refresh tokens, vygeneruj a ulož – zde jednoduché řešení bez refresh
    return {
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        image: user.image,
      },
    };
  }

  // furter helpers: get user by id
  async getUserById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
