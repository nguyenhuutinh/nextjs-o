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
        <link rel="dns-prefetch" href="//www.googletagmanager.com"></link>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=GTM-5G5638H`}
          />
          
          <script
              dangerouslySetInnerHTML={{
                __html: `
                (function(w, d, s, l, i){
                  w[l] = w[l] || []; w[l].push({
                      'gtm.start':
                          new Date().getTime(), event: 'gtm.js'
                  }); var f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
                }) (window, document, 'script', 'dataLayer', 'GTM-5G5638H');
            `,
              }}
          />
          <script
              dangerouslySetInnerHTML={{
                __html: `
                (function (i, s, o, g, r, a, m) {
                  i['MePuzzAnalyticsObject'] = r; i[r] = i[r] || function () {
                      (i[r].q = i[r].q || []).push(arguments);
                  }, i[r].l = 1 * new Date(); a = s.createElement(o),
                      m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g;
                  m.parentNode.insertBefore(a, m);
                  })(window, document, 'script', 'https://static.mepuzz.com/sdk/v2/MePuzzSDK.min.js', 'mePuzz');
                  mePuzz('setAppId', 'BnZenzGejJ');
                  mePuzz('track','pageview');
            `,
              }}
          />
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