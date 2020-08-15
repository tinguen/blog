import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../user/users.service'
import { Token } from './types/token.type'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async login(email: string, pass: string): Promise<Token> {
    const user = await this.usersService.validateUser(email, pass)
    if (!user) return null
    const payload = { email: user.email, sub: user.id }
    return {
      token: this.jwtService.sign(payload)
    }
  }
}
