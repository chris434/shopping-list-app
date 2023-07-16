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
    
        default:
           return state
    }
}