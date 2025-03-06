import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '@root/entities/User.entity';
import { RegisterDto } from '@root/auth/src/dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '@root/auth/src/dto/login.dto';

@Injectable()
export class AuthApiService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // User 엔티티와 연동된 Repository 주입
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;
    const hashedPassword = await bcrypt.hash(password, 10); // 비밀번호 해싱
    const user = new User(); // 사용자 정보 저장
    user.name = name;
    user.email = email;
    user.password = hashedPassword;
    await this.userRepository.save(user);
    return { message: '회원가입 성공' };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userRepository.findOneBy({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('유효하지 않은 사용자입니다.');
    }

    const payload = { email: user.email, id: user.id }; // JWT 발급
    const token = this.jwtService.sign(payload);

    return { message: '로그인 성공', accessToken: token };
  }
}
