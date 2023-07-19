import {useParams}from 'next/navigation'
import { type } from 'os'
import { ChangeEventHandler } from 'react'

type textFieldProps = {
    error:string
    label: string
    onChange?:ChangeEventHandler<HTMLInputElement>
}&textFieldTypesProps

type textFieldTypesProps = {
    type?: 'text'
    value: string
     
} | {
    type: 'number'
    value: number
}


export function TextField({ value, error, label,onChange,type}: textFieldProps) {
    const params = useParams()
    console.log(params)
    return <div className="flex flex-col md:flex-row gap-5 w-full">
        <label className="text-xl font-medium" htmlFor={label}>{label}</label>
        <input className={`${error ?'border-red-400':'border-teal-500'} border-b-4 border-teal-500 text-xl sm:w-[80%] outline-none`}  id={label}  defaultValue={value} placeholder={label} onChange={onChange} />
        {error && <div className='text-red-400'>{error}</div>}
    </div>
}