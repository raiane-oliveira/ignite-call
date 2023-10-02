import '@/lib/dayjs'

import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <title>Ignite Call</title>
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
