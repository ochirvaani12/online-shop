import { IsEmail } from 'class-validator';

export class CreateLoginDto {
  userId: number;

  @IsEmail()
  email: string;

  password: string;
}
