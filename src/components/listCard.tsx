import {useRouter} from 'next/navigation'
import { Button } from './button'
import {Pill} from './pill'
import { listProps } from '../types/listTypes'
import{formatCurrency} from '../utils/currency'

type listCardProps = {
    list: listProps
    index:number
}

export function ListCard({ list,index}: listCardProps) {
    const router=useRouter()
    const { listName, progress, stores, maxSpend ,itemCount} = list
    
    function onclickHandler(param:string) {
    router.push(`/list/${index}/${param}`)
}

    return <div  className='p-5 shadow-xl rounded-2xl'>
                <h2 className="text-xl mb-5">{listName}</h2>
                <section className='flex-row  flex gap-5 flex-wrap mb-10'>
                    <Pill>complete {progress}/{itemCount}</Pill>
                    <Pill>max spend {formatCurrency(maxSpend)}</Pill>
                    <Pill>stores {stores.length}</Pill>
                </section>
                <section className='flex gap-5 justify-end'> 
                    <Button onClick={()=>onclickHandler('edit')}>Edit</Button>
                    <Button onClick={() => onclickHandler('shop')}>Shop</Button>
                </section>
            </div>
}