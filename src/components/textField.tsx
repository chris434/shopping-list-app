import {useParams}from 'next/navigation'
import { ChangeEventHandler } from 'react'

type textFieldProps = {
    value: string
    error:string
    label: string
    onChange?:ChangeEventHandler<HTMLInputElement>
}


export function TextField({ value, error, label,onChange}: textFieldProps) {
    const params = useParams()
    console.log(params)
    return <div className="flex flex-col md:flex-row gap-5 w-full">
        <label className="text-xl font-medium" htmlFor={label}>{label}</label>
        <input className={`${error ?'border-red-400':'border-teal-500'} border-b-4 border-teal-500 text-xl sm:w-[80%] outline-none`}  id={label} defaultValue={value} placeholder={label} onChange={onChange} />
        {error && <div className='text-red-400'>{error}</div>}
    </div>
}