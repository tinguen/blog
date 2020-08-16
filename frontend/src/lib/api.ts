import { gql } from '@apollo/client'

export const getAllPosts = gql`
  query {
    posts {
      id
      text
      author {
        id
        name
      }
      comments {
        id
        text
        author {
          id
          name
        }
      }
    }
  }
`

export const createPost = gql`
  mutation($text: String!) {
    post(text: $text) {
      id
    }
  }
`

export const updatePost = gql`
  mutation($id: String!, $text: String!) {
    post(id: $id, text: $text) {
      id
      text
    }
  }
`

export const deletePost = gql`
  mutation($id: String!) {
    deletePost(id: $id)
  }
`

export const createComment = gql`
  mutation($text: String!, $postId: String!) {
    comment(text: $text, postId: $postId) {
      id
    }
  }
`

export const updateComment = gql`
  mutation($id: String!, $postId: String!, $text: String!) {
    comment(id: $id, postId: $postId, text: $text) {
      id
      text
    }
  }
`

export const deleteComment = gql`
  mutation($id: String!) {
    deleteComment(id: $id)
  }
`

export const auth = gql`
  mutation($email: String!, $password: String!) {
    auth(email: $email, password: $password) {
      token
    }
  }
`

export const signUp = gql`
  mutation($email: String!, $password: String!, $name: String!) {
    signUp(email: $email, password: $password, name: $name) {
      id
    }
  }
`

export const getUser = gql`
  query {
    user {
      id
      name
      email
      role
    }
  }
`
