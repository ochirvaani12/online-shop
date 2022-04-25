import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { CreateLoginDto } from './dto/create-login.dto';
import { EnterLoginDto } from './dto/enter-login.dto';
import { Login } from './entities/login.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login) private loginRepository: Repository<Login>,
    private readonly authService: AuthService,
  ) {}

  async create(createLoginDto: CreateLoginDto) {
    const login = this.loginRepository.create(createLoginDto);
    login.password = await this.authService.hashPassword(
      createLoginDto.password,
    );
    login.createdDatetime = new Date();
    login.modifiedDatetime = new Date();
    await this.loginRepository.save(login);
  }

  async login(enterLoginDto: EnterLoginDto): Promise<number> {
    const login = await this.loginRepository.findOne({
      where: { email: enterLoginDto.email },
    });

    if (
      this.authService.comparePassword(enterLoginDto.password, login.password)
    ) {
      return login.userId;
    } else {
      throw NotFoundException;
    }
  }
}
