import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreatePostDto } from '@root/post/src/dto/create-post.dto';
import { JwtPayload, User } from '@root/auth/src/auth.jwt.decorator';
import {
  CreatePostFail,
  CreatePostSuccess,
} from '@root/post/src/docs/CreatePostDocs';
import { PostApiService } from '@root/post/src/post.service';
import { UpdatePostDto } from './dto/update-post.dto';
import { UpdatePostParamDto } from './dto/update-post-param.dto';

@Controller('post')
export class PostApiController {
  constructor(private readonly postApiService: PostApiService) {}

  @ApiTags('Post')
  @ApiOperation({
    summary: '게시글 생성 API',
    description: '게시글 생성 API입니다.',
  })
  @ApiCreatedResponse({
    description: 'API 호출에 성공헀습니다.',
    type: CreatePostSuccess,
  })
  @ApiUnauthorizedResponse({
    description: '유효하지 않은 사용자입니다.',
    type: CreatePostFail,
  })
  @Post()
  async create(@Body() createPostDto: CreatePostDto, @User() user: JwtPayload) {
    return await this.postApiService.create(createPostDto, user);
  }

  @Put('/:postId')
  async update(
    @Body() updatePostDto: UpdatePostDto,
    @Param() updatePostParamDto: UpdatePostParamDto,
    @User() user: JwtPayload,
  ) {
    return await this.postApiService.update(
      updatePostDto,
      updatePostParamDto.postId,
      user,
    );
  }
}
