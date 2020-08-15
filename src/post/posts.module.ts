import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostsService } from './posts.service'
import { Post } from './post.entity'
import { PostsResolver } from './posts.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostsService, PostsResolver],
  exports: [PostsService]
})
export class PostsModule {}
