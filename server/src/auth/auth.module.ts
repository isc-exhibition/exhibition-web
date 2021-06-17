import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { GQLAuthGuard } from './guard/auth.guard';
import { User } from './admin.entitiy';
import '../config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async () => {
        // const JwtSecretKey = await getJwtSecretKey();

        return {
          secret: process.env.JWT_SECRET_KEY,
          signOptions: {
            expiresIn: 60 * 60, // 1 hour
          },
        };
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, GQLAuthGuard],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
