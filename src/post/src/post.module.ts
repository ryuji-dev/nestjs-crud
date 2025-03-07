import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PostApiController } from '@root/post/src/post.controller';
import { PostApiService } from '@root/post/src/post.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule], // ConfigModule을 가져옴
      inject: [ConfigService], // ConfigService를 주입
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // 환경변수에서 가져온 secret 값
        signOptions: { expiresIn: '1h' }, // 토큰 만료 시간
      }),
    }),
  ],
  controllers: [PostApiController],
  providers: [PostApiService],
})
export class PostApiModule {}
