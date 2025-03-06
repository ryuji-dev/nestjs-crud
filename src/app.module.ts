import { Module } from '@nestjs/common';
import { AppController } from '@root/app.controller';
import { AppService } from '@root/app.service';
import { ConfigModule } from '@nestjs/config';
import { getTypeOrmModule } from '@root/entities/config/TypeOrmModule';
import { EntityModule } from '@root/entities/config/EntityModule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    getTypeOrmModule(), // TypeORM 모듈을 주입
    EntityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
