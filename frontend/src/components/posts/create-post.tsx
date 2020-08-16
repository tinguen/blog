import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { createPost } from '../../lib/api'
import { FormGroup, Label, TextArea, Button } from '../forms'

const CreatePost = () => {
  const [text, setText] = useState('')
  const [post, { loading, error }] = useMutation(createPost)

  return (
    <>
      <FormGroup>
        <Label>Text</Label>
        <TextArea value={text} onChange={(e) => setText(e.target.value)} />

        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            post({ variables: { text } }).catch((err) => {
              console.log(err)
            })
            setText('')
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

export default CreatePost
