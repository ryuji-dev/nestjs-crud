import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class DeletePostParamDto {
  @ApiProperty({
    example: 10,
    description: 'postID',
    required: true,
  })
  @Type(() => Number)
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  postId: number;
}
