import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'utility/theme'

interface Props {
  children?: React.ReactNode
}

function Theme({ children }: Props) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

export default Theme
