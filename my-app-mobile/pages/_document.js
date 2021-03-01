import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="vi" translate="no" class="notranslate" >
        

        <Head>
        <meta name="google" content="notranslate"/>
        </Head>
        <body class="notranslate">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument