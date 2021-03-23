import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { AdminRepository } from './admin.repository';
import { AdminCredentialsDto } from './dto/auth.admin-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AdminRepository)
    private adminRepository: AdminRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(adminCredentialsDto: AdminCredentialsDto): Promise<string> {
    return this.adminRepository.signUp(adminCredentialsDto);
  }

  async signIn(adminCredentialsDto: AdminCredentialsDto): Promise<any> {
    const admin = await this.adminRepository.validateAdminPassword(
      adminCredentialsDto,
    );
    if (!admin) {
      throw new UnauthorizedException('Invalid Id or Password');
    }
    const payload = { admin };
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken, admin };
  }
}
