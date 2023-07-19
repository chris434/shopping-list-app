import { FormEvent ,ChangeEvent} from 'react'
import { useSearchParams } from 'next/navigation'
import { TextField } from '../../../components/textField'
import { useLists } from '../../../providers/listProvider'
import { useErrors } from '../../../hooks/errorhandler'
import { ERROR_FIELDS } from '../../../data/listData'
import {isNumber} from '../../../utils/number'
type argsProps = [boolean, string][]
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

    function listMaxSpendHandler(e: ChangeEvent<HTMLInputElement>) {
        const { value } = e.target
        const maxSpend = parseFloat(value)
        const args:argsProps =[[maxSpend>0,'number must be grater than 0'],[isNumber(maxSpend),'must be a number']]
        const fieldData={value,fieldText:'max spend',fieldKey:'maxSpend'}
        checkField(fieldData, {required: true},()=>  editList({ maxSpend } ,listId),args )
          
    }

    

    return <form className="m-5" onSubmit={onsubmitHandler}>
        <section className="p-5 shadow-2xl">
            {
                listId && <>
                    <TextField onChange={listNameHandler} error={errors.listName} value={lists[listId].listName} label='list title' />
                    <TextField type='number' value={lists[listId].maxSpend } error={errors.maxSpend} onChange={listMaxSpendHandler} label='max spend'/>
                </>
            }
          
        </section>
    </form>
}