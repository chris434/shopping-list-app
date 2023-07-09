import '../styles/app.css'
import type { AppProps } from 'next/app'
import {HeaderLayout}from '../layouts/headerLayout'

export default function App({ Component, pageProps }: AppProps) {
  return <HeaderLayout>
<Component {...pageProps} />
  </HeaderLayout> 
}
