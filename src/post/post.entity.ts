import { PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, Entity } from 'typeorm'
import { User } from '../user/user.entity'
import { Comment } from '../comment/comment.entity'

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(
    () => User,
    (user) => user.comments
  )
  author: User

  @Column({ nullable: true })
  authorId: string

  @Column()
  text: string

  @OneToMany(
    () => Comment,
    (comment) => comment.author
  )
  comments: Comment[]

  constructor(text: string, author: User) {
    this.text = text
    this.author = author
  }
}
