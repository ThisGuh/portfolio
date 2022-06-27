import styled from 'styled-components'

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const AboutH2 = styled.h2`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: ${({ theme }) => theme.fontSizes.big};
`

export const AboutSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 30px;
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

  @media ${({ theme }) => theme.screenSizes.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.screenSizes.desktop} {
    grid-template-columns: repeat(6, 1fr);
  }
`

export const TechnologyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    max-width: 150px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.darkPurple};
  }
`

export const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  justify-content: center;

  @media ${({ theme }) => theme.screenSizes.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.screenSizes.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const ProjectContainer = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 250px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition-duration: 0.7s;
  justify-content: center;
  padding: 10px;

  section {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 15px;
    right: 3px;
    bottom: 3px;

    a svg {
      width: 25px;
    }
  }

  > * {
    max-width: 170px;
    padding: 5px;
    text-decoration: none;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.lightPurple};

    section {
      a svg path {
        fill: ${({ theme }) => theme.colors.lightPurple} !important;
      }
    }
  }
`
