import { FormEvent ,ChangeEvent} from 'react'
import { useSearchParams } from 'next/navigation'
import { TextField } from '../../../components/textField'
import { useLists } from '../../../providers/listProvider'
import { useErrors } from '../../../hooks/errorhandler'
import {ERROR_FIELDS} from '../../../data/listData'

export default function List() {

    const searchParams = useSearchParams()
    const listId = searchParams.values().next().value 
    const { lists, editList } = useLists()
    const {errors,checkField}=useErrors(ERROR_FIELDS)
 
   console.log(listId)
    function onsubmitHandler(e:FormEvent) {
        e.preventDefault();
    }

    function listNameHandler(e: ChangeEvent<HTMLInputElement>) {
        const { value: listName } = e.target
        const fieldData={value:listName,fieldText:'list title',fieldKey:'listName'}
        checkField(fieldData, {required: true},()=>  editList({ listName } ,listId) )
          
    }

    return <form className="m-5" onSubmit={onsubmitHandler}>
        <section className="p-5 shadow-2xl">
            {
                listId&&  <TextField onChange={listNameHandler} error={errors.listName} value={lists[listId].listName} label='list title' />
            }
          
        </section>
    </form>
}