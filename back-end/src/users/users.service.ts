import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLoginDto } from 'src/login/dto/create-login.dto';
import { LoginService } from 'src/login/login.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly loginService: LoginService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    const savedUser = await this.userRepository.save(user);

    const login = new CreateLoginDto();
    login.userId = savedUser.userId;
    login.email = savedUser.email;
    login.password = createUserDto.password;

    await this.loginService.create(login);
    return login;
  }

  async findOne(userId: number): Promise<User> {
    return await this.userRepository.findOne({ where: { userId: userId } });
  }
}
