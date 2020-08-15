import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentsService } from './comments.service'
import { Comment } from './comment.entity'
import { CommentsResolver } from './comments.resolver'
import { PostsModule } from '../post/posts.module'

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), forwardRef(() => PostsModule)],
  providers: [CommentsService, CommentsResolver],
  exports: [CommentsService]
})
export class CommentsModule {}
