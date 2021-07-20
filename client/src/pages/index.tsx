import React from 'react'
import Head from 'next/head'
// import { useColorMode, Center, Button } from '@chakra-ui/react'

import { Navbar } from '../components/layout/Navbar'
import { Landing } from '../components/layout/Landing'

import { App } from 'src/styles/home'

export default function Home() {
  // const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Head>
        <title>MERN fullstack</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/*<Center>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Center>*/}

      <App>
        <Navbar />
        <Landing />
      </App>
    </>
  )
}