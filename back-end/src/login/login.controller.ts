import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { EnterLoginDto } from './dto/enter-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  create(@Body() enterLoginDto: EnterLoginDto) {
    return this.loginService.login(enterLoginDto);
  }
}
