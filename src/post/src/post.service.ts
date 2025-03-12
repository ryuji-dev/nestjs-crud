import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '@root/entities/Post.entity';
import { User } from '@root/entities/User.entity';
import { IsNull, Repository } from 'typeorm';
import { CreatePostDto } from '@root/post/src/dto/create-post.dto';
import { JwtPayload } from '@root/auth/src/auth.jwt.decorator';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostApiService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) {}

  async create(dto: CreatePostDto, user: JwtPayload) {
    const { title, content } = dto;

    // 사용자 정보 확인
    const findUser = await this.userRepository.findOne({
      where: { id: user.id.toString() }, // 주어진 userId로 사용자 조회
    });

    if (!findUser) {
      throw new UnauthorizedException('유효하지 않은 사용자입니다.');
    }

    // 게시글 정보 저장
    const post = new Post();
    post.title = title;
    post.content = content;
    post.user = findUser;

    await this.postRepository.save(post);

    return {
      message: '게시글 생성 성공',
    };
  }

  async update(dto: UpdatePostDto, postId: number, user: JwtPayload) {
    const { title, content } = dto;
    const findUser = await this.userRepository.findOne({
      where: { id: user.id.toString() },
    });

    if (!findUser) {
      throw new UnauthorizedException('유효하지 않은 사용자입니다.');
    }

    const post = await this.postRepository.findOne({
      where: { id: postId.toString(), user: { id: findUser.id } },
    });

    if (!post) {
      throw new NotFoundException(
        '해당 사용자가 작성한 게시글을 찾을 수 없습니다.',
      );
    }
    post.title = title;
    post.content = content;

    const updatedPost = await this.postRepository.save(post);

    return { message: '게시글 수정 성공', updatedPost };
  }

  async softDelete(postId: number, user: JwtPayload) {
    // 사용자 확인
    const findUser = await this.userRepository.findOne({
      where: { id: user.id.toString() },
    });

    if (!findUser) {
      throw new UnauthorizedException('유효하지 않은 사용자입니다.');
    }

    const post = await this.postRepository.findOne({
      where: { id: postId.toString(), user: { id: findUser.id } },
    });

    if (!post) {
      throw new NotFoundException(
        '해당 사용자가 작성한 게시글을 찾을 수 없습니다.',
      );
    }

    // Soft delete 적용
    await this.postRepository.softRemove(post);
    return { message: '게시글이 성공적으로 삭제되었습니다.' };
  }

  async findAllPosts(limit: number) {
    const [posts, total] = await this.postRepository.findAndCount({
      where: { deletedAt: IsNull() },
      relations: ['user'],
      take: limit, // 한 페이지에 몇 개의 게시글을 가져올지 제한
    });

    return {
      data: posts,
      total, // 총 게시글 수
    };
  }
}
