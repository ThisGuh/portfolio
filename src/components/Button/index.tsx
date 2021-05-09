import React from 'react'
import { StyledButton } from 'components/Button/Button.style'

interface Props {
  text: string
}

function Button({ text }: Props) {
  return <StyledButton>{text}</StyledButton>
}

export default Button
