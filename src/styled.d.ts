import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      darkPurple: string
      lightPurple: string
      gray: string
    }
    fontSizes: {
      small: string
      medium: string
      big: string
      large: string
    }
  }
}
