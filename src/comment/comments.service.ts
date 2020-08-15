import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Comment } from './comment.entity'
import { User } from '../user/user.entity'
import { RoleEnum } from '../user/enums/role.enum'
import { PostsService } from '../post/posts.service'

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
    private postsService: PostsService
  ) {}

  findAll(): Promise<Comment[]> {
    return this.commentsRepository.find()
  }

  findOneById(id: string): Promise<Comment> {
    return this.commentsRepository.findOne(id)
  }

  async removeComment(id: string, user: User): Promise<boolean> {
    const comment = await this.commentsRepository.findOne(id)
    if (!comment) throw new NotFoundException()
    if (comment.authorId != user.id && user.role != RoleEnum.Admin) throw UnauthorizedException
    await this.commentsRepository.delete(id)
    return true
  }

  async createComment(text: string, postId: string, author: User): Promise<Comment> {
    const post = await this.postsService.findOneById(postId)
    if (!post) throw new NotFoundException()
    const comment = new Comment(text, post, author)
    return this.commentsRepository.save(comment)
  }

  async updateComment(id: string, text: string, user: User): Promise<Comment> {
    const comment = await this.commentsRepository.findOne(id)
    if (!comment) throw new NotFoundException()
    if (comment.authorId != user.id && user.role != RoleEnum.Admin) throw UnauthorizedException
    comment.text = text
    return this.commentsRepository.save(comment)
  }
}
