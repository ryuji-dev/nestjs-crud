import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class CreatePostSuccess {
  @ApiProperty({
    type: 'string',
    title: '성공 응답 값',
    description: '게시글 생성 성공',
    example: '게시글 생성 성공',
  })
  message: string;

  @ApiProperty({
    type: 'string',
    format: 'uuid',
    title: '성공 응답 값',
    description: '게시글 생성 성공 시 얻은 게시글 id',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  id: string;
}

@ApiExtraModels()
export class CreatePostFail {
  @ApiProperty({
    type: 'number',
    title: '실패 응답 값',
    description: '401',
    example: 401,
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    title: '실패 응답 값',
    description: '유효하지 않은 사용자입니다.',
    example: '유효하지 않은 사용자입니다.',
  })
  message: string;

  @ApiProperty({
    type: 'string',
    title: '실패 응답 값',
    description: 'Unauthorized',
    example: 'Unauthorized',
  })
  error: string;
}
