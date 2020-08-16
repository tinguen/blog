export type Comment = {
  id: string
  author: User
  post: Post
  text: string
}

export type Post = {
  id: string
  author: User
  text: string
  comments: Comment[]
}

export type User = {
  id: string
  name: string
  email: string
  role: RoleEnum
  posts: Post[]
  comments: Comment[]
}

export enum RoleEnum {
  Admin,
  Author
}
