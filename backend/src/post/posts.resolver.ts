import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { Post } from './post.entity'
import { PostsService } from './posts.service'
import { GqlAuthGuard } from '../auth/guards/jwt-auth.gql.guard'
import { CurrentUser } from '../user/decorators/current-user.decorator'
import { User } from '../user/user.entity'
import { CommentsService } from 'src/comment/comments.service'

@Resolver(() => Post)
export class PostsResolver {
  constructor(private postsService: PostsService, private commentsService: CommentsService) {}

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return this.postsService.findAll()
  }

  @Mutation(() => Post)
  @UseGuards(GqlAuthGuard)
  async post(
    @CurrentUser() user: User,
    @Args('text') text: string,
    @Args({ name: 'id', nullable: true }) id: string
  ): Promise<Post> {
    if (id) return this.postsService.updatePost(id, text, user)
    return this.postsService.createPost(text, user)
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deletePost(@CurrentUser() user: User, @Args('id') id: string): Promise<boolean> {
    const post = await this.postsService.findOneById(id)
    post.comments.forEach((comment) => this.commentsService.removeComment(comment.id, user))
    return this.postsService.removePost(id, user)
  }
}
