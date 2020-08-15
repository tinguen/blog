import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { Comment } from './comment.entity'
import { CommentsService } from './comments.service'
import { GqlAuthGuard } from '../auth/guards/jwt-auth.gql.guard'
import { CurrentUser } from '../user/decorators/current-user.decorator'
import { User } from '../user/user.entity'

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private commentsService: CommentsService) {}

  @Query(() => [Comment])
  async comments(): Promise<Comment[]> {
    return this.commentsService.findAll()
  }

  @Mutation(() => Comment)
  @UseGuards(GqlAuthGuard)
  async comment(
    @CurrentUser() user: User,
    @Args('text') text: string,
    @Args('postId') postId: string,
    @Args({ name: 'id', nullable: true }) id: string
  ): Promise<Comment> {
    if (id) return this.commentsService.updateComment(id, text, user)
    return this.commentsService.createComment(text, postId, user)
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deleteComment(@CurrentUser() user: User, @Args('id') id: string): Promise<boolean> {
    return this.commentsService.removeComment(id, user)
  }
}
