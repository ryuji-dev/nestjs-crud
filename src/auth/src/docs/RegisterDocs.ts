import { ApiExtraModels, ApiProperty, PickType } from '@nestjs/swagger';
import { RegisterDto } from '@root/auth/src/dto/register.dto';

@ApiExtraModels()
export class RegisterSuccess {
  @ApiProperty({
    type: 'string',
    title: '성공 응답 값',
    description: '회원가입 성공',
    example: '회원가입 성공',
  })
  message: string;
}

PickType(RegisterDto, ['email', 'password', 'name']);
