import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthApiService } from '@root/auth/auth.service';
import { RegisterSuccess } from '@root/auth/src/docs/RegisterSuccess';
import { RegisterDto } from '@root/auth/src/dto/register.dto';

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
}
