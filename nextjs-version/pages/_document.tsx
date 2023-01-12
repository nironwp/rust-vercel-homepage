import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800&display=swap"
            rel="stylesheet"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
