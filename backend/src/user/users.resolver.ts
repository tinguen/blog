import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { User } from './user.entity'
import { UsersService } from './users.service'
import { GqlAuthGuard } from '../auth/guards/jwt-auth.gql.guard'
import { GqlRolesGuard } from '../auth/guards/roles.gql.guard'
import { RoleEnum } from '../user/enums/role.enum'
import { Roles } from '../auth/decorators/roles.decorator'
import { CurrentUser } from './decorators/current-user.decorator'

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  async author(@Args('id') id: string): Promise<User> {
    return this.usersService.findOneById(id)
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async user(@CurrentUser() user: User): Promise<User> {
    return user
  }

  @Query(() => [User])
  @Roles(RoleEnum.Author)
  @UseGuards(GqlRolesGuard)
  @UseGuards(GqlAuthGuard)
  async users(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Mutation(() => User)
  async signUp(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string
  ): Promise<User> {
    return this.usersService.create(name, email, password)
  }
}
