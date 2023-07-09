import {ReactNode} from 'react'
import { Header } from '../components/header'

type HeaderLayoutProps = {
  children:ReactNode
}
export function HeaderLayout({children}:HeaderLayoutProps) {
    return <>
    <Header/>
      {children}  
        </>
}