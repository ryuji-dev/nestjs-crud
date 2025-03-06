import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

export function getTypeOrmModule() {
  return TypeOrmModule.forRootAsync({
    imports: [ConfigModule], // ConfigModule을 주입
    inject: [ConfigService], // ConfigService를 주입
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get<string>('DB_HOST', 'localhost'), // 환경변수에서 DB_HOST 가져오기, 없으면 'localhost' 기본값 사용
      port: configService.get<number>('DB_PORT', 5432), // 환경변수에서 DB_PORT 가져오기, 없으면 5432 기본값 사용
      username: configService.get<string>('DB_USERNAME', 'ryuji'), // 환경변수에서 DB_USERNAME 가져오기, 없으면 'ryuji' 기본값 사용
      password: configService.get<string>('DB_PASSWORD'), // 환경변수에서 DB_PASSWORD 가져오기
      database: configService.get<string>('DB_DATABASE', 'nestjs_crud'), // 환경변수에서 DB_DATABASE 가져오기, 없으면 'nestjs_crud' 기본값 사용
      entities: [path.join(__dirname, '..', '**/*.entity.{js,ts}')], // 엔티티 파일 경로 설정
      logging: true, // 로깅 설정
      synchronize: false, // 동기화 설정
    }),
  });
}
