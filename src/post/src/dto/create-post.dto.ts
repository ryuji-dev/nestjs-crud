import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    description: '제목',
    example: 'test',
    required: true,
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: '내용',
    example: 'test',
    required: true,
  })
  @IsString()
  content: string;
}
