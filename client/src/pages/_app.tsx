import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ChakraProvider>
  )
}

export default MyApp