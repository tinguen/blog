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

  async findAll(): Promise<Post[]> {
    return this.postsRepository.find({
      join: {
        alias: 'post',
        leftJoinAndSelect: {
          comments: 'post.comments',
          author: 'comments.author'
        }
      }
    })
  }

  findOneById(id: string): Promise<Post> {
    return this.postsRepository.findOne(id)
  }

  async removePost(id: string, user: User): Promise<boolean> {
    const post = await this.postsRepository.findOne(id)
    if (!post) throw new NotFoundException()
    if (post.authorId != user.id && user.role != RoleEnum.Admin) throw UnauthorizedException
    await this.postsRepository.delete(id)
    return true
  }

  async createPost(text: string, author: User): Promise<Post> {
    const post = new Post(text, author)
    await this.postsRepository.save(post)
    return this.findOneById(post.id)
  }

  async updatePost(id: string, text: string, user: User): Promise<Post> {
    const post = await this.postsRepository.findOne(id)
    if (!post) throw new NotFoundException()
    if (post.authorId != user.id && user.role != RoleEnum.Admin) throw UnauthorizedException
    post.text = text
    await this.postsRepository.save(post)
    return this.findOneById(post.id)
  }
}
