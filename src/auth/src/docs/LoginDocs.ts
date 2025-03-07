import { ApiExtraModels, ApiProperty, PickType } from '@nestjs/swagger';
import { LoginDto } from '@root/auth/src/dto/login.dto';

@ApiExtraModels()
export class LoginSuccess {
  @ApiProperty({
    type: 'string',
    title: '성공 응답 값',
    description: '로그인 성공',
    example: '로그인 성공',
  })
  message: string;

  @ApiProperty({
    type: 'string',
    title: '성공 응답 값',
    description: '로그인 성공 시 얻은 accessToken',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  })
  accessToken: string;
}

@ApiExtraModels()
export class LoginFail {
  @ApiProperty({
    type: 'number',
    title: '실패 응답 값',
    description: '401',
    example: 401,
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    title: '실패 응답 값',
    description: '유효하지 않은 사용자입니다.',
    example: '유효하지 않은 사용자입니다.',
  })
  message: string;

  @ApiProperty({
    type: 'string',
    title: '실패 응답 값',
    description: 'Unauthorized',
    example: 'Unauthorized',
  })
  error: string;
}

PickType(LoginDto, ['email', 'password']);
