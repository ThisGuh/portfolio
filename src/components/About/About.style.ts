import styled from 'styled-components'

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
export const AboutH2 = styled.h2`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: ${({ theme }) => theme.fontSizes.big};
`

export const AboutDescription = styled.section`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  padding: 0 10px;

  @media ${({ theme }) => theme.screenSizes.desktop} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`

export const TechnologiesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  > * {
    width: 100px;
  }

  @media ${({ theme }) => theme.screenSizes.desktop} {
    grid-template-columns: repeat(6, 1fr);
  }
`

export const TechnologiesH2 = styled.h2`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: ${({ theme }) => theme.fontSizes.big};
`
