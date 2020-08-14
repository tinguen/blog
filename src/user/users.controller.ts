import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './user.entity'
import { RolesGuard } from '../auth/guards/roles.guard'
import { Roles } from '../auth/decorators/roles.decorator'
import { RoleEnum } from './enums/role.enum'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles(RoleEnum.Admin)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  async get(): Promise<User[]> {
    return await this.usersService.findAll()
  }

  @Post()
  async create(
    @Body() createCatDto: { name: string; email: string; password: string }
  ): Promise<User> {
    return await this.usersService.create(
      createCatDto.name,
      createCatDto.email,
      createCatDto.password
    )
  }
}
