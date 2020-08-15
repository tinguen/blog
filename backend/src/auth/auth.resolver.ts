import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { Token } from './types/token.type'

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => Token)
  async auth(@Args('email') email: string, @Args('password') password: string): Promise<Token> {
    return this.authService.login(email, password)
  }
}
