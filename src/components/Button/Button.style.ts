import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  border: none;
  cursor: pointer;

  @media ${({ theme }) => theme.screenSizes.desktop} {
    width: 130px;
    height: 50px;
    padding: 8px;
    margin: 15px;
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`
