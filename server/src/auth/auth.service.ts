import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminRepository } from './admin.repository';
import { AdminCredentialsDto } from './dto/auth.admin-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AdminRepository)
    private adminRepository: AdminRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(
    adminCredentialsDto: AdminCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const admin = await this.adminRepository.validateAdminPassword(
      adminCredentialsDto,
    );
    if (!admin) {
      throw new UnauthorizedException('Invalid Id or Password');
    }

    const payload = { admin };
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };
  }
}
