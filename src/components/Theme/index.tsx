import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { defaultTheme } from 'utility/theme'
import { normalize } from 'utility/normalize'
import { defaultStyle } from 'utility/default-style'

interface Props {
  children?: React.ReactNode
}

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${defaultStyle}
`

function Theme({ children }: Props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Theme
