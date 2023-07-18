
export type listProps = {
    listName: string
    progress: number
    maxSpend: number
    itemCount:number
    stores:storeProps[]
}
export type storeProps = {
      progress: number
    maxSpend: number
    items:itemProps[]
}

export type itemProps = {
    itemName: string
    price: number | null
    checked: boolean
}
export type actionProps = {
    type: 'ADD_LIST'|'SET_LISTS'|'EDIT_LIST'
    payload?:any
}