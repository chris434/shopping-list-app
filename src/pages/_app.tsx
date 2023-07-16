import '../styles/app.css'
import type { AppProps } from 'next/app'
import { HeaderLayout } from '../layouts/headerLayout'
import {ListProvider} from '../providers/listProvider'

export default function App({ Component, pageProps }: AppProps) {
  return<ListProvider>
<HeaderLayout>
<Component {...pageProps} />
  </HeaderLayout> 
  </ListProvider> 
}
