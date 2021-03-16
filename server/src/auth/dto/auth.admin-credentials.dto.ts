import { IsString, MinLength } from 'class-validator';

export class AdminCredentialsDto {
  @IsString()
  admin_id: string;

  @IsString()
  @MinLength(6)
  password: string;
}
