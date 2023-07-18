import {setData,getData} from '../utils/localStorage'
import { listProps, actionProps } from '../types/listTypes'

export function listReducer(state: listProps[], action: actionProps):listProps[]{
    switch (action.type) {
        case 'ADD_LIST':
            const newLists = [...state, action.payload]
            setData<listProps[]>('lists',newLists)
            return newLists
        case 'SET_LISTS':
            const lists= getData<listProps[]>('lists')
            setData<listProps[]>('lists',lists)
            return lists
        case 'EDIT_LIST': {
            console.log('hg')
             const { data, listId } = action.payload
            const newLists = state.map((list, i) => {
                console.log(data)
                  console.log(listId)
                if (i == listId) {
                    console.log(data)
                 return {...list,...data}   
                }
                return list
            })
            setData<listProps[]>('lists', newLists)
            return newLists
            
         }
           
    
        default:
           return state
    }
}