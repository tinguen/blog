import { IsEmail } from 'class-validator'
import { Field, ObjectType } from '@nestjs/graphql'
import { PrimaryGeneratedColumn, Column, OneToMany, Entity, BeforeInsert, Unique } from 'typeorm'
import { RoleEnum } from './enums/role.enum'
import { Post } from '../post/post.entity'
import { Comment } from '../comment/comment.entity'

import bcrypt = require('bcrypt')

@Entity()
@ObjectType()
@Unique(['email'])
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field()
  @IsEmail()
  @Column()
  email: string

  @Column()
  password: string

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = bcrypt.hashSync(this.password, 10)
  }

  @Field(() => RoleEnum)
  @Column()
  role: RoleEnum

  @Field(() => [Post])
  @OneToMany(
    () => Post,
    (post) => post.author,
    { eager: false }
  )
  posts: Post[]

  @Field(() => [Comment])
  @OneToMany(
    () => Comment,
    (comment) => comment.author,
    { eager: false }
  )
  comments: Comment[]

  constructor(name: string, email: string, password: string) {
    this.name = name
    this.email = email
    this.password = password
    this.role = RoleEnum.Author
  }
}
