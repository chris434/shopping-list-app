import {childrenProps} from '../types/componentTypes'

export function Pill({ children }:childrenProps) {
    return <div className="bg-gray-100 rounded-2xl p-2 w-fit shadow-md">{children}</div>
}