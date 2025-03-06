import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@root/entities/User.entity';
import { Post } from '@root/entities/Post.entity';
import { Profile } from '@root/entities/Profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post, Profile])],
  exports: [TypeOrmModule],
  providers: [],
  controllers: [],
})
export class EntityModule {}
