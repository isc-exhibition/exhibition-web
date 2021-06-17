import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './admin.entitiy';
import { MongoRepository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private adminRepository: MongoRepository<User>,
  ) {
    super({
      jwtFromRequest: fromAuthCookie(),
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  async validate(payload: JwtPayload) {
    const { user_id } = payload;
    const user = await this.adminRepository.findOne({ user_id });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

function fromAuthCookie() {
  return function (request) {
    let token = null;
    if (request && request.cookies) {
      token = request.cookies['Authorization'];
    }
    return token;
  };
}
