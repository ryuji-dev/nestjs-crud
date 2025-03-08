import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePostDto {
  @ApiProperty({
    description: '제목',
    example: 'test',
    required: true,
  })
  @IsOptional()
  @IsString()
  title: string;

  @ApiProperty({
    description: '내용',
    example: 'test',
    required: true,
  })
  @IsOptional()
  @IsString()
  content: string;
}
