import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { Post } from './post.entity'
import { PostsService } from './posts.service'
import { GqlAuthGuard } from '../auth/guards/jwt-auth.gql.guard'
import { CurrentUser } from '../user/decorators/current-user.decorator'
import { User } from '../user/user.entity'

@Resolver(() => Post)
export class PostsResolver {
  constructor(private postsService: PostsService) {}

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
    return this.postsService.removePost(id, user)
  }
}
