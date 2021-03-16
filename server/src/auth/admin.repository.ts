import { EntityRepository, Repository } from 'typeorm';
import { Admin } from './admin.entitiy';
import { AdminCredentialsDto } from './dto/auth.admin-credentials.dto';
import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {
  async signUp(adminCredentialsDto: AdminCredentialsDto): Promise<string> {
    const { admin_id, password } = adminCredentialsDto;

    const user = new Admin();
    user.admin_id = admin_id;
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, user.salt);

    try {
      await user.save();
      return 'Successfully Signed In';
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
    const { admin_id, password } = authCredentialsDto;

    const admin = await this.findOne({ admin_id });

    if (admin && (await admin.validatePassword(password))) {
      return admin.admin_id;
    } else {
      return null;
    }
  }
}
