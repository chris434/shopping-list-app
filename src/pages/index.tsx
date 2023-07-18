
import { Lists } from "../components/lists"
import {useParams} from 'next/navigation'
export default function Home() {
  const params=useParams()
console.log(params)
  return <Lists/>
  
}
