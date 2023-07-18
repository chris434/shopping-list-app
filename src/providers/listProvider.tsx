import {useParams}from'next/navigation'
import { createContext, useContext, useReducer, Dispatch, useEffect } from 'react'
import { listReducer } from '../reducers/listReducer'
import { listProps, actionProps } from '../types/listTypes'
import {childrenProps}from '../types/componentTypes'

type contextProps = {
    lists: listProps[],
    dispatch: Dispatch<actionProps>
}

const Provider =  createContext<contextProps>({lists:[],dispatch:()=>{}})
export  function ListProvider({ children }: childrenProps) {
    const params = useParams()
    console.log(params)
    const [lists, dispatch] = useReducer(listReducer, [])
    
    useEffect(() => {
       dispatch({type:'SET_LISTS'}) 
    },[])

    return <Provider.Provider value={{lists, dispatch}}>
{children}
    </Provider.Provider>
}

export function useLists() {
    const { lists, dispatch } = useContext(Provider)
    console.log(lists)
    function addList(list:listProps) {
       dispatch({type:'ADD_LIST',payload:list}) 
    }
    function editList(data:object,listId:number) {
        dispatch({ type: 'EDIT_LIST', payload: { data,listId } }) 
    }
    return {lists,addList,editList}
}