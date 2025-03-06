import { Module } from '@nestjs/common';
import { AuthApiController } from '@root/auth/auth.controller';
import { AuthApiService } from '@root/auth/auth.service';

@Module({
  imports: [],
  controllers: [AuthApiController],
  providers: [AuthApiService],
})
export class AuthApiModule {}
