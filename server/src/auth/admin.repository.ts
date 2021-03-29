import { EntityRepository, Repository } from 'typeorm';
import { User } from './admin.entitiy';
import { AdminCredentialsDto } from './dto/auth.admin-credentials.dto';
import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(User)
export class AdminRepository extends Repository<User> {
  async signUp(adminCredentialsDto: AdminCredentialsDto): Promise<string> {
    const { user_id, password } = adminCredentialsDto;

    const user = new User();
    user.user_id = user_id;
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, user.salt);

    try {
      await user.save();
      return user_id
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Username already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateAdminPassword(
    authCredentialsDto: AdminCredentialsDto,
  ): Promise<string> {
    const { user_id, password } = authCredentialsDto;

    const user = await this.findOne({ user_id });

    if (user && (await user.validatePassword(password))) {
      return user.user_id;
    } else {
      return null;
    }
  }
}
