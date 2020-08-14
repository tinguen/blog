import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../user/users.service'
import { User } from '../user/user.entity'
import { Token } from './types/token.type'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.validateUser(email, pass)
    if (!user) return null
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user
    return result
  }

  async login(user: User): Promise<Token> {
    const payload = { email: user.email, sub: user.id }
    return {
      token: this.jwtService.sign(payload)
    }
  }
}
