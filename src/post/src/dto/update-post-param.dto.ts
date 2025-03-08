import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdatePostParamDto {
  @ApiProperty({
    example: 10,
    description: 'postId',
    required: true,
  })
  @Type(() => Number)
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  postId: number;
}
