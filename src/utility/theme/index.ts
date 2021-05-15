import { DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
  colors: {
    white: '#ffffff',
    darkPurple: '#120845',
    lightPurple: '#7562e0',
    gray: '#78748f',
  },
  fontSizes: {
    small: '1.4rem',
    normal: '1.6rem',
    medium: '1.8rem',
    big: '3rem',
    mobileLarge: '5.5rem',
    large: '10rem',
  },
  screenSizes: {
    mobile: '(min-width: 320px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1280px)',
    bigDesktop: '(min-width: 1600px)',
  },
}
