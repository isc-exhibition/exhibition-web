import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminRepository } from './admin.repository';
import { AdminCredentialsDto } from './dto/auth.admin-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AdminRepository)
    private adminRepository: AdminRepository,
  ) {}

  async signIn(adminCredentialsDto: AdminCredentialsDto): Promise<string> {
    const admin = await this.adminRepository.validateAdminPassword(
      adminCredentialsDto,
    );
    if (!admin) {
      throw new UnauthorizedException('Invalid Id or Password');
    }

    return admin;
  }
}
