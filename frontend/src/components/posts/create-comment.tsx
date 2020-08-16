import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { createComment } from '../../lib/api'
import { FormGroup, Label, TextArea, Button } from '../forms'

type Props = {
  id: string
}

const CreateComment = ({ id }: Props) => {
  const [newComment, setNewComment] = useState('')
  const [comment, { loading, error }] = useMutation(createComment)
  return (
    <>
      <FormGroup>
        <Label>Leave a comment</Label>
        <TextArea value={newComment} onChange={(e) => setNewComment(e.target.value)} />

        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            comment({ variables: { postId: id, text: newComment } }).catch((err) => {
              console.log(err)
            })
            setNewComment('')
          }}
        >
          Create
        </Button>
        {loading && <p>Loading...</p>}
        {error && <p>Error :( Please try again</p>}
      </FormGroup>
    </>
  )
}

export default CreateComment
