import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Post } from './post.entity'
import { User } from '../user/user.entity'
import { RoleEnum } from 'src/user/enums/role.enum'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>
  ) {}

  findAll(): Promise<Post[]> {
    return this.postsRepository.find()
  }

  findOne(id: string): Promise<Post> {
    return this.postsRepository.findOne(id)
  }

  async removePost(id: string, user: User): Promise<Post> {
    const post = await this.postsRepository.findOne(id)
    if (!post) throw new NotFoundException()
    if (post.authorId != user.id && user.role != RoleEnum.Admin) throw UnauthorizedException
    await this.postsRepository.delete(id)
    return post
  }

  createPost(text: string, author: User): Promise<Post> {
    const post = new Post(text, author)
    return this.postsRepository.save(post)
  }

  async updatePost(id: string, text: string): Promise<Post> {
    const post = await this.postsRepository.findOne(id)
    if (!post) throw new NotFoundException()
    post.text = text
    return this.postsRepository.save(post)
  }
}
