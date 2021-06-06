import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const LoadingScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

function LoadingScreen() {
  return (
    <LoadingScreenContainer>
      <Loader type="ThreeDots" color="#7562e0" height={100} width={100} />
    </LoadingScreenContainer>
  )
}

export default LoadingScreen
