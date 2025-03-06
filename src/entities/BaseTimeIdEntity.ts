import {
  CreateDateColumn,
  DeleteDateColumn,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseTimeIdEntity {
  @Generated('uuid')
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  createAt: Date;
  @UpdateDateColumn({ type: 'timestamptz', nullable: false })
  updateAt: Date;
  @DeleteDateColumn({ type: 'timestamptz' })
  deleteAt: Date | null;
}
