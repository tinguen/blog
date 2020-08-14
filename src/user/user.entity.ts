import { PrimaryGeneratedColumn, Column, OneToMany, Entity, BeforeInsert, Unique } from 'typeorm'
import { IsEmail } from 'class-validator'
import { RoleEnum } from './enums/role.enum'
import { Post } from '../post/post.entity'
import { Comment } from '../comment/comment.entity'

import bcrypt = require('bcrypt')

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  @IsEmail()
  email: string

  @Column()
  password: string

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = bcrypt.hashSync(this.password, 10)
  }

  @Column()
  role: RoleEnum

  @OneToMany(
    () => Post,
    (post) => post.author
  )
  posts: Post[]

  @OneToMany(
    () => Comment,
    (comment) => comment.author
  )
  comments: Comment[]

  constructor(name: string, email: string, password: string) {
    this.name = name
    this.email = email
    this.password = password
    this.role = RoleEnum.Author
  }
}
