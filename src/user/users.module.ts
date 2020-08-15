import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersService } from './users.service'
import { User } from './user.entity'
import { AuthModule } from '../auth/auth.module'
import { UsersResolver } from './users.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthModule],
  providers: [UsersService, UsersResolver],
  exports: [UsersService]
})
export class UsersModule {}
