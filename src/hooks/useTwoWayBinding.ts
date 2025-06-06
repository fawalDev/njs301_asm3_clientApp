import { ChangeEvent, ChangeEventHandler, useState } from "react"

/**
 * 
 * @param initialState - T
 * @returns Array [val, onChangeVal, setVal]
 */

export default function useTwoWayBinding<T>(initialState?: T): [T, ChangeEventHandler<HTMLInputElement>, React.Dispatch<React.SetStateAction<T>>] {
    const [val, setVal] = useState<T>(initialState || <T>(''))
    function onChangeVal(e: ChangeEvent<HTMLInputElement>) {
        setVal(<T>(e.target.value))
    }
    return [
        val,
        onChangeVal,
        setVal,
    ]
}