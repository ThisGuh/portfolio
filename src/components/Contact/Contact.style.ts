import styled from 'styled-components'
import LinkedinIcon from 'icons/linkedin.svg'

export const ContactContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  min-height: 60vh;

  @media ${({ theme }) => theme.screenSizes.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.normal};
  }
`
export const SocialSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContactH2 = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: ${({ theme }) => theme.fontSizes.big};
`

export const StyledLinkedinIcon = styled(LinkedinIcon)`
  width: 60px;
  cursor: pointer;
  margin-bottom: 40px;
  > * {
    fill: ${({ theme }) => theme.colors.lightPurple};
  }
`
export const ContactEmail = styled.span`
  color: ${({ theme }) => theme.colors.lightPurple};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  cursor: pointer;
  margin: 10px;
  :hover {
    text-decoration: underline;
  }
`
