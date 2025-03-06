import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    description: '이름',
    example: 'test',
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: '이메일',
    example: 'test@test.com',
    required: true,
  })
  @IsEmail()
  email: string;

  // IsStrongPassword를 사용해 비밀번호 검증
  @IsStrongPassword({
    minLength: 8, // 최소 길이
    minLowercase: 1, // 최소 소문자
    minUppercase: 1, // 최소 대문자
    minNumbers: 1, // 최소 숫자
    minSymbols: 1, // 최소 특수문자
  })
  password: string;
}
