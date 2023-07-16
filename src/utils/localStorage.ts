export function getData<T>(key: string) {
    const jsonData = localStorage.getItem(key)
    if (jsonData) {
    const data:T =JSON.parse(jsonData)
    return  data
    } 
   return[]
}

export function setData<T>(key: string, value:T) {
return localStorage.setItem(key,JSON.stringify(value))   
}