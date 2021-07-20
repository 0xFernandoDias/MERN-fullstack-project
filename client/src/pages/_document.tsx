import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

import { ServerStyleSheet } from 'styled-components'
import theme from '../styles/theme'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

        const initialProps = await Document.getInitialProps(ctx)
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
          ),
        }
      } finally {
        sheet.seal()
      }
    }
  
  render(): JSX.Element {
    return (
      <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument