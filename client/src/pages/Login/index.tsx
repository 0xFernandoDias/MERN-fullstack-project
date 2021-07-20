import Head from 'next/head'
import React, { ReactElement } from 'react'
import { Navbar } from 'src/components/layout/Navbar'
import { SignIn } from 'src/components/layout/SignIn'
import { Container } from './styles'

export default function Login(): ReactElement {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <Navbar />
        <SignIn action={'/Dashboard'} uporin={'signin'} />
      </Container>
    </>
  )
}