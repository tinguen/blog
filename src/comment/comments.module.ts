import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentsService } from './comments.service'
import { Comment } from './comment.entity'
import { CommentsResolver } from './comments.resolver'
import { PostsModule } from '../post/posts.module'

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), PostsModule],
  providers: [CommentsService, CommentsResolver]
})
export class CommentsModule {}
