import { Test, TestingModule } from '@nestjs/testing';
import { PostApiController } from '@root/post/src/post.controller';
import { PostApiService } from '@root/post/src/post.service';

describe('PostController', () => {
  let controller: PostApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostApiController],
      providers: [PostApiService],
    }).compile();

    controller = module.get<PostApiController>(PostApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
