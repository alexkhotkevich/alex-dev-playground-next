/* eslint-disable @next/next/no-document-import-in-page */
/* https://github.com/vercel/next.js/issues/28596 */
import React from 'react'
import Document, { DocumentProps, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import { withFork } from 'effector-next'

interface Props extends DocumentProps {
  analytics: {
    remoteAddr: string
    forwardedFor: string | string[]
    realIP: string | string[]
  }
}

const enhance = withFork({ debug: true })

class MyDocument extends Document<Props> {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Analytics
          <script async src='Analytics'></script>
          <script
            dangerouslySetInnerHTML={{
              __html: 'Analytics',
            }}
          />
          */}

          {/* PWA primary color
          <meta name='theme-color' content={} />
          */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          {Head}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: function enhancer(App) {
        return function stylesCollector(props) {
          return sheets.collect(<App {...props} />)
        }
      },
    })

  const initialProps = await Document.getInitialProps(ctx)

  const analytics: Props['analytics'] = {
    remoteAddr: ctx.req?.socket?.remoteAddress || '',
    forwardedFor: ctx.req?.headers['x-forwarded-for'] || '',
    realIP: ctx.req?.headers['x-real-ip'] || '',
  }

  return {
    ...initialProps,
    analytics: analytics,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  }
}

export default enhance(MyDocument)
