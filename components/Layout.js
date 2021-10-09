import Head from "next/head";

export default function Layout({ children }) {

    return ( 
        <>
          <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta charSet="utf-8" />

              <title>Crypto form</title>
              <link rel="icon" type="image/png" href="/favicon.ico" />
              <link rel="apple-touch-icon" href="/favicon.ico" />
          </Head>
          {children}
      </>
    )
}