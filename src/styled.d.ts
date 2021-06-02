import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      darkPurple: string
      lightPurple: string
      gray: string
      lightGray: string
      red: string
    }
    fontSizes: {
      small: string
      normal: string
      medium: string
      big: string
      mobileLarge: string
      large: string
    }
    screenSizes: {
      mobile: string
      tablet: string
      desktop: string
      bigDesktop: string
    }
  }
}
