import styled from 'styled-components'

export const StyledInput = styled.input`
  width: 280px;
  height: 35px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightPurple};
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.gray};
  margin: 10px;

  @media ${({ theme }) => theme.screenSizes.desktop} {
    width: 380px;
  }
`
export const StyledTextArea = styled.textarea`
  width: 280px;
  border: none;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightPurple};
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.gray};
  resize: none;
  margin: 10px;

  @media ${({ theme }) => theme.screenSizes.desktop} {
    width: 380px;
  }
`
export const InputError = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.red};
`
