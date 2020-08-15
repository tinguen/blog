import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'

import bcrypt = require('bcrypt')

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}
  findAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['posts', 'comments'] })
  }

  findOneById(id: string): Promise<User> {
    return this.usersRepository.findOne(id, { relations: ['posts', 'comments'] })
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }

  async create(name: string, email: string, password: string): Promise<User> {
    if (await this.usersRepository.findOne({ where: { email } }))
      throw new BadRequestException('Email is taken')
    const user = new User(name, email, password)
    return this.usersRepository.save(user)
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { email } })
    if (!user) throw new UnauthorizedException()
    if (bcrypt.compareSync(password, user.password)) return user
    return null
  }
}
