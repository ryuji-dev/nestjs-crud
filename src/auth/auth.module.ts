import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthApiController } from '@root/auth/auth.controller';
import { AuthApiService } from '@root/auth/auth.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule], // ConfigModule을 가져옴
      inject: [ConfigService], // ConfigService를 주입
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'), // 환경변수에서 가져온 secret 값
        signOptions: { expiresIn: '1h' }, // 토큰 만료 시간
      }),
    }),
  ],
  controllers: [AuthApiController],
  providers: [AuthApiService],
})
export class AuthApiModule {}
