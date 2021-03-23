import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminRepository } from './admin.repository';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(AdminRepository)
    private adminRepository: AdminRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'iscexhibition',
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
