import { Test, TestingModule } from '@nestjs/testing';
import { AuthApiController } from './auth.controller';
import { AuthApiService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthApiController],
      providers: [AuthApiService],
    }).compile();

    controller = module.get<AuthApiController>(AuthApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
