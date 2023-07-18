import { FormEvent ,useState,ChangeEvent} from 'react'
import { useSearchParams } from 'next/navigation'
import { TextField } from '../../../components/textField'
import { useLists } from '../../../providers/listProvider'

type argsProps = [boolean, string][]
type optionsProps = { required: boolean }
type fieldDataProps={value:string,fieldText:string,fieldKey:string}


export default function List() {
    const [errors,setErrors]=useState({listName:''})
    const searchParams = useSearchParams()
    const listId = searchParams.values().next().value 
    const { lists,editList } = useLists()
 
   console.log(listId)
    function onsubmitHandler(e:FormEvent) {
        e.preventDefault();
    }
    function checkField(fieldData: fieldDataProps, options: optionsProps, destCb: () => void, args?: argsProps) {
        const {value,fieldText,fieldKey}=fieldData
        let error = ''
        if(options.required && !value) error =`${fieldText} is required`

        setErrors((errors) => errors = { ...errors, [fieldKey]: error })
        if(!error)  destCb()
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