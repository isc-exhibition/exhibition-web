import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from './admin.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AdminRepository])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
