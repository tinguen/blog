import styled from 'styled-components'

export const FormGroup = styled.div`
  display: block;
  width: 100%;
  margin: 3rem auto;
`

export const Label = styled.label`
  font-size: 1.25rem;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

export const Input = styled.input`
  box-sizing: border-box;
  padding: 0.5em;
  border: solid;
  border-width: 1px;
  border-radius: 0.125rem;
  border-color: #cbd5e0;
  width: 100%;
  margin-bottom: 0.5rem;
`

export const TextArea = styled.textarea`
  box-sizing: border-box;
  padding: 0.5em;
  border: solid;
  border-width: 1px;
  border-radius: 0.125rem;
  border-color: #cbd5e0;
  width: 100%;
  margin-bottom: 0.5rem;
`

export const Button = styled.button`
  border: solid;
  border-width: 1px;
  float: right;
  border-color: #cbd5e0;
  padding: 0.5rem 1rem;
  background: black;
  color: white;
  &:hover {
    background: white;
    color: black;
    border-color: black;
  }
`
