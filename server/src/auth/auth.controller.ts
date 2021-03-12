import { Body, Controller, Post } from '@nestjs/common';
import { AdminCredentialsDto } from './dto/auth.admin-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signin')
  signIn(@Body() adminCredentialsDto: AdminCredentialsDto): Promise<string> {
    return this.authService.signIn(adminCredentialsDto);
  }
}
