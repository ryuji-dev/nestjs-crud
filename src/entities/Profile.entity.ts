import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseTimeIdEntity } from '@root/entities/BaseTimeIdEntity';
import { User } from '@root/entities/User.entity';

@Entity()
export class Profile extends BaseTimeIdEntity {
  @Column()
  avatarUrl: string;

  @OneToOne(() => User) // 1:1 관계 설정
  @JoinColumn() // 외래 키 설정
  user: User;
}
