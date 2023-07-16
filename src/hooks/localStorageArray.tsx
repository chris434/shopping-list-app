import { useState, useEffect } from 'react'

export function useLocalStorageArray<T>(key: string) {
    const [localStorageData, setLocalStorage] = useState<T[]>([])

    

    function getJsonData() {
         const jsonData = localStorage.getItem(key) 
        if (!jsonData) return
        return JSON.parse(jsonData)
    }


    useEffect(() => {

        const jsonData = localStorage.getItem(key) 
        if (!jsonData) return
       const result=JSON.parse(jsonData)

        setLocalStorage(result)
    },[key])
    
    function setItem(item: T) {
        const currentData=getJsonData()
        const newData: T[] = Array.isArray(currentData) ? [...currentData, item] : [item]
        const result = JSON.stringify(newData)

        localStorage.setItem(key, result)
        setLocalStorage(newData)
    }
    const data:[T[],(item:T)=>void]=[localStorageData, setItem] 
    return data
}