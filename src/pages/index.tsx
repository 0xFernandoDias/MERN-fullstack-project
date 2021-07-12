// import Link from 'next/link'
import Head from 'next/head'

import styled from 'styled-components'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>MERN fullstack</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <h1>Hello World</h1>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
`
export default Home