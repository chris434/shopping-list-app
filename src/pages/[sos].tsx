import {useEffect} from 'react'
import { useSearchParams} from 'next/navigation'
function H() {

    return <div>hjdee</div>
}

export default function Gsw() {
const router =useSearchParams()
    useEffect(() => {
    console.log(router.query);
  }, []);
    console.log(router.get('sos'))
    return <H/>
}