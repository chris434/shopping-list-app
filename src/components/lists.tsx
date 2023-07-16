import {ListCard} from './listCard'
import { useLists } from '../providers/listProvider'

export function Lists() {
    const { lists } = useLists()
    return <main>
        <div className='m-5 text-2xl'>shopping lists {lists.length}</div>
        <div className='grid xs:grid-cols-2  md:grid-cols-3 gap-10 m-10'>
              {lists.map((list, i) => {
   
            return <ListCard key={i} index={i} list={list}/>
        })}
        </div>
       
    </main>
}