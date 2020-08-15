import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { User } from '../user/user.entity'
import { Post } from '../post/post.entity'

@Entity()
@ObjectType()
export class Comment {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(() => User)
  @ManyToOne(
    () => User,
    (user) => user.posts
  )
  author: User

  @Field()
  @Column()
  authorId: string

  @Field()
  @Column()
  text: string

  @Field(() => [Post])
  @ManyToOne(
    () => Post,
    (post) => post.comments
  )
  post: Post

  @Column()
  postId: string

  constructor(text: string, post: Post, author: User) {
    this.text = text
    this.post = post
    this.author = author
  }
}
