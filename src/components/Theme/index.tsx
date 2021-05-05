import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from 'utility/theme'
import { normalize } from 'utility/normalize'

interface Props {
  children?: React.ReactNode
}

const GlobalStyle = createGlobalStyle`
  ${normalize}
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
