import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { UsersService } from '../../user/users.service'
import { User } from '../../user/user.entity'
import { Payload } from '../types/payload.type'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService, private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('SECRET')
    })
  }

  async validate(payload: Payload): Promise<User> {
    const user = await this.usersService.findOne(payload.sub)
    if (!user) throw new UnauthorizedException()
    return user
  }
}
