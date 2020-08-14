import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm'
import { User } from '../user/user.entity'
import { Post } from '../post/post.entity'

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(
    () => User,
    (user) => user.posts
  )
  author: User

  @Column()
  authorId: string

  @Column()
  text: string

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
