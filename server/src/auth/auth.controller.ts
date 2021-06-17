import { Body, Controller, Post, Res, ValidationPipe } from '@nestjs/common';
import { AdminCredentialsDto } from './dto/auth.admin-credentials.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) adminCredentialsDto: AdminCredentialsDto,
  ): Promise<string> {
    return this.authService.signUp(adminCredentialsDto);
  }

  @Post('/signin')
  async signIn(
    @Body() adminCredentialsDto: AdminCredentialsDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<any> {
    const { accessToken, user_id } = await this.authService.signIn(
      adminCredentialsDto,
    );
    response.cookie('Authorization', accessToken, { httpOnly: true });
    response.statusCode = 200;
    return user_id;
  }
}
