import { IsAlpha, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsAlpha()
  firstname: string;

  @IsAlpha()
  lastname: string;

  @IsEmail()
  email: string;

  phone: string;

  zipCode: string;

  password: string;
}
