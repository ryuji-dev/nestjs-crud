import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: '이메일',
    example: 'test@test.com',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: '비밀번호',
    example: 'test1234',
    required: true,
  })
  @IsStrongPassword({
    minLength: 8, // 최소 길이
    minLowercase: 1, // 최소 소문자
    minUppercase: 1, // 최소 대문자
    minNumbers: 1, // 최소 숫자
    minSymbols: 1, // 최소 특수문자
  })
  password: string;
}
