import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseTimeIdEntity } from '@root/entities/BaseTimeIdEntity';
import { User } from '@root/entities/User.entity';

@Entity()
export class Post extends BaseTimeIdEntity {
  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.posts) // 각 Post가 하나의 User에 속하는 N:1 관계
  user: User;
}
