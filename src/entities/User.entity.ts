import { Column, Entity, OneToMany } from 'typeorm';
import { BaseTimeIdEntity } from '@root/entities/BaseTimeIdEntity';
import { Post } from '@root/entities/Post.entity';

@Entity() // User 엔티티는 users 테이블과 매핑됨
export class User extends BaseTimeIdEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Post, (post) => post.user, {
    cascade: ['soft-remove', 'recover'],
  }) // User가 여러 Post를 가질 수 있는 1:N 관계
  posts: Post[];
}
