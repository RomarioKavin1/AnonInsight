import './globals.css'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Nav  from '../components/Nav'
import { cookieToInitialState } from 'wagmi'

import { config } from '@/config'
import { ContextProvider } from '@/context'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
        <body className={"leading-normal tracking-normal text-indigo-400 m-6 bg-cover font-mono"}>
        <ContextProvider initialState={initialState}>
          <Nav/>
          {children}</ContextProvider>
      </body>
    </html>
  )
}