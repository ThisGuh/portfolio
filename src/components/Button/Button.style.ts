import styled from 'styled-components'

interface Props {
  small?: boolean
}

export const StyledButton = styled.button<Props>`
  width: ${({ small }) => (small ? '80px' : '100px')};
  height: ${({ small }) => (small ? '35px' : '40px')};
  padding: 5px;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme, small }) =>
    small ? theme.fontSizes.small : theme.fontSizes.normal};
  border: none;
  cursor: pointer;

  @media ${({ theme }) => theme.screenSizes.desktop} {
    width: ${({ small }) => (small ? '100px' : '130px')};
    height: ${({ small }) => (small ? '35px' : '50px')};
    padding: 8px;
    margin: 15px;
    font-size: ${({ theme, small }) =>
      small ? theme.fontSizes.normal : theme.fontSizes.medium};
  }
`
