import { verify } from 'jsonwebtoken';
import { prisma } from '../prisma.client';
import * as cookie from 'cookie';


export async function createContext({ req, res }: { req: Request; res: Response }) {
  const cookieHeader =
    typeof req.headers.get === 'function'
      ? req.headers.get('cookie')
      : (req.headers as any).cookie;
  const authHeader =
    typeof req.headers.get === 'function'
      ? req.headers.get('authorization')
      : (req.headers as any).authorization;
  const cookies = cookie.parse(cookieHeader || '');
  const token =
    (authHeader && authHeader.split(' ')[1]) ||
    cookies['access_token'];
  let user = undefined;

  if (token) {
    try {
      const payload = verify(token, process.env.JWT_ACCESS_SECRET!) as unknown as { sub: number };
      const dbUser = await prisma.user.findUnique({
        where: { id: payload.sub },
        include: {
          roles: {
            include: {
              role: { include: { permissions: { include: { permission: true } } } },
            },
          },
        },
      });
      if (dbUser) {
        const roles = dbUser.roles.map((r) => r.role.name);
        const perms = dbUser.roles.flatMap((r) =>
          r.role.permissions.map((rp) => rp.permission.name),
        );
        user = { id: dbUser.id, roles, permissions: Array.from(new Set(perms)) };
      }
    } catch {}
  }

  return { prisma, user, req, res };
}
