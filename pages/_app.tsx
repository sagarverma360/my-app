import Context from '@/context/context' 
import WebContext from '@/context/webContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  
  return (<>
  <Context>
    <WebContext>
      <Component {...pageProps} />
    </WebContext>
  </Context>
  </>)
  
}
