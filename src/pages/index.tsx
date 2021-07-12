// import Link from 'next/link'
import { Button, Container, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'

import React from 'react'
import styled from 'styled-components'

const Home: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Head>
        <title>MERN fullstack</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Main>
        <Container centerContent={true}>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Container>
      </Main>
    </>
  )
}

export default Home

const Main = styled.div`
  margin-top: 23%;
`