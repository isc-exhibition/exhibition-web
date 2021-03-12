import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AdminCredentialsDto } from './dto/auth.admin-credentials.dto';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signin')
  signIn(
    @Body() adminCredentialsDto: AdminCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(adminCredentialsDto);
  }

  @Post('/test')
  test(): any {
    const password = '1234';
    const salt = '$2b$10$YWeeDixLMlml2NW5BZdYuO';

    const hash = bcrypt.hash(password, salt);
    return hash;
  }
}
