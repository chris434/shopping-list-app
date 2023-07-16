import { useRouter } from 'next/router'
import {useLists} from '../providers/listProvider'

export function Header() {
    const router = useRouter()
    const {addList,lists}=useLists()

    function newList() {
        const INITIAL_DATA = { listName: 'untitled', maxSpend: 2, stores:[], progress: 0 }
          const listIndex=lists.length
        addList(INITIAL_DATA)
        router.push(`/lists/${listIndex}/edit`)
    }

    return <header className="bg-teal-500 p-5 flex gap-5 sticky items-center shadow-2xl">
        <h1 className="text-white text-2xl">Shopping list</h1>
        <nav className="flex gap-5">
           <button className="text-white border-2 border-white p-2" onClick={newList}>+ new</button>
        </nav>
    </header>
}