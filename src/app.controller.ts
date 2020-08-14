import { Controller, Get, UseGuards, Post, Request } from '@nestjs/common'
import { AppService } from './app.service'
import { LocalAuthGuard } from './auth/guards/local-auth.guard'
import { AuthService } from './auth/auth.service'
import { Token } from './auth/types/token.type'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async login(@Request() req): Promise<Token> {
    return this.authService.login(req.user)
  }
}
