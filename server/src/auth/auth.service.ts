import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminCredentialsDto } from './dto/auth.admin-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';
import * as bcrypt from 'bcrypt';
import { User } from './admin.entitiy';
import { MongoRepository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: MongoRepository<User>,
    private jwtService: JwtService,
  ) {}

  async signIn(adminCredentialsDto: AdminCredentialsDto): Promise<any> {
    try {
      const user_id = await this.validateUser(adminCredentialsDto);
      if (!user_id) {
        throw new UnauthorizedException('Invalid Id or Password');
      }
      const payload: JwtPayload = { user_id };
      const accessToken = await this.jwtService.sign(payload);

      return { accessToken, user_id };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException();
    }
  }

  async signUp(adminCredentialsDto: AdminCredentialsDto): Promise<string> {
    const { user_id, password } = adminCredentialsDto;

    const user = new User();
    user.user_id = user_id;
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, user.salt);

    try {
      await user.save();
      return user.user_id;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Username already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  private async validateUser(
    authCredentialsDto: AdminCredentialsDto,
  ): Promise<string> {
    const { user_id, password } = authCredentialsDto;

    const user = await this.userRepository.findOne({ user_id });

    if (user && (await user.validatePassword(password))) {
      return user.user_id;
    } else {
      return null;
    }
  }
}
