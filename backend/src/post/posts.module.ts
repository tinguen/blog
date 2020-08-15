import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostsService } from './posts.service'
import { Post } from './post.entity'
import { PostsResolver } from './posts.resolver'
import { CommentsModule } from 'src/comment/comments.module'

@Module({
  imports: [TypeOrmModule.forFeature([Post]), CommentsModule],
  providers: [PostsService, PostsResolver],
  exports: [PostsService]
})
export class PostsModule {}
