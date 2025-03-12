import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class FindPostQueryDto {
  @ApiProperty({
    example: 10,
    description: 'limit',
    required: true,
  })
  @Type(() => Number)
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  limit: number;
}
