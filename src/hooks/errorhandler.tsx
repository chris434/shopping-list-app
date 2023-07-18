import { useState } from "react"

type argsProps = [boolean, string][]
type optionsProps = { required: boolean }
type fieldDataProps={value:string,fieldText:string,fieldKey:string}

export function useErrors<T>(FieldErrors:T) {
    const [errors, setErrors] = useState<T>(FieldErrors) 
    
     function checkField(fieldData: fieldDataProps, options: optionsProps, destCb: () => void, args?: argsProps) {
        const {value,fieldText,fieldKey}=fieldData
        let error = ''
         if (options.required && !value) error = `${fieldText} is required`
         
         if (args) {
             for (let argPair of args){
                 const [arg, errorMessage] = argPair
                 if (arg) {
                     error = errorMessage
                     continue
                 }
             }
         }

        setErrors((errors) => errors = { ...errors, [fieldKey]: error })
        if(!error)  destCb()
     }
    
    return {errors,checkField}
}