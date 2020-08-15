import { PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, Entity } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { User } from '../user/user.entity'
import { Comment } from '../comment/comment.entity'

@Entity()
@ObjectType()
export class Post {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(() => User)
  @ManyToOne(
    () => User,
    (user) => user.comments,
    { eager: true }
  )
  author: User

  @Column({ nullable: true })
  authorId: string

  @Field()
  @Column()
  text: string

  @Field(() => [Comment])
  @OneToMany(
    () => Comment,
    (comment) => comment.post,
    { eager: true }
  )
  comments: Comment[]

  constructor(text: string, author: User) {
    this.text = text
    this.author = author
  }
}
