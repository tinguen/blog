import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentsService } from './comments.service'
import { Comment } from './comment.entity'
import { PostsModule } from '../post/posts.module'

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), PostsModule],
  providers: [CommentsService]
})
export class CommentsModule {}
