import styled from 'styled-components'

export const HeroContainer = styled.section`
  height: 100vh;
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;

  @media ${({ theme }) => theme.screenSizes.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const HeroHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroH1 = styled.h1`
  width: 300px;
  word-spacing: 300px;
  line-height: 175%;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.mobileLarge};
  text-align: center;
  color: ${({ theme }) => theme.colors.darkPurple};
  font-weight: bold;
  letter-spacing: 3px;

  @media ${({ theme }) => theme.screenSizes.desktop} {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`

export const HeroDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.gray};
`
export const HeroCircle = styled.svg`
  width: 300px;
  height: 250px;
  align-self: flex-end;
  justify-self: flex-end;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  clip-path: circle(79.6% at 99% 99%);

  @media ${({ theme }) => theme.screenSizes.desktop} {
    width: 600px;
    height: 600px;
    clip-path: circle(76.1% at 79% 86%);
  }
`

export const HeroIconContainer = styled.section`
  width: 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  position: absolute;
  bottom: 40px;
  right: 50px;
`

export const HeroNav = styled.nav`
  display: none;
  position: absolute;
  top: 30px;
  right: 100px;

  @media ${({ theme }) => theme.screenSizes.desktop} {
    display: block;
  }
`

export const HeroNavList = styled.ul`
  display: flex;
  list-style: none;
`

export const HeroNavListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  margin: 0 25px;
`
