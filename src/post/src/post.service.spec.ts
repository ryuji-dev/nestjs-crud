import { Test, TestingModule } from '@nestjs/testing';
import { PostApiService } from '@root/post/src/post.service';

describe('PostService', () => {
  let service: PostApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostApiService],
    }).compile();

    service = module.get<PostApiService>(PostApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
