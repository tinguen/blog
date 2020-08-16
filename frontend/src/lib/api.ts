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
  mutation($text: String!) {
    deletePost(text: $text)
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
  mutation($text: String!) {
    deleteComment(text: $text)
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
