import React from 'react'
import { StyledButton } from 'components/Button/Button.style'

interface Props {
  text: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  small?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
}

function Button({ text, small, onClick, type }: Props) {
  return (
    <StyledButton small={small} onClick={onClick} type={type}>
      {text}
    </StyledButton>
  )
}

export default Button
