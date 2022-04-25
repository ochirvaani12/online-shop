import { IsEmail } from 'class-validator';

export class EnterLoginDto {
  @IsEmail()
  email: string;

  password: string;
}
