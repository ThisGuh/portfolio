import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  height: 70px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  text-align: center;
  line-height: 70px;
`
const date = new Date()

function Footer() {
  return <StyledFooter>© {date.getFullYear()} Damian Głuch</StyledFooter>
}

export default Footer
