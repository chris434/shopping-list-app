import { MouseEventHandler} from 'react'
import { childrenProps } from "../types/componentTypes";

type buttonProps = {
    onClick?:MouseEventHandler<HTMLButtonElement>
}

export function Button({children,onClick}:childrenProps&buttonProps) {
    return <button onClick={onClick} className="p-2 bg-teal-500 border-teal-500 border-4 text-white text-xl rounded-md hover:text-teal-500 hover:bg-transparent">{children }</button>
}