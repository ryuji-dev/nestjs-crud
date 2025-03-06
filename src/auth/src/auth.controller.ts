import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthApiService } from '@root/auth/src/auth.service';
import { RegisterSuccess } from '@root/auth/src/docs/RegisterDocs';
import { RegisterDto } from '@root/auth/src/dto/register.dto';
import { LoginSuccess } from '@root/auth/src/docs/LoginDocs';
import { LoginDto } from '@root/auth/src/dto/login.dto';

@Controller('auth')
export class AuthApiController {
  constructor(private readonly authApiService: AuthApiService) {}

  @ApiTags('Auth')
  @ApiOperation({ summary: '회원가입 API', description: '회원가입 API입니다.' })
  @ApiCreatedResponse({
    description: 'API 호출에 성공했습니다.',
    type: RegisterSuccess,
  })
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.authApiService.register(registerDto);
  }

  @ApiTags('Auth')
  @ApiOperation({ summary: '로그인 API', description: '로그인 API입니다.' })
  @ApiCreatedResponse({
    description: 'API 호출에 성공했습니다.',
    type: LoginSuccess,
  })
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authApiService.login(loginDto);
  }
}
