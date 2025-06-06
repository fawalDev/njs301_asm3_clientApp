import { ChangeEventHandler, Dispatch } from "react";
import useTwoWayBinding from "./useTwoWayBinding";
import useValidate from "./useValidate";


export default function useTwoWayBinding_Validate<T>(inputTitle: string, validationFuncsArr: Function[]): [T, ChangeEventHandler<HTMLInputElement>, string, Dispatch<React.SetStateAction<T>>] {
    const [val, onChangeVal, setVal] = useTwoWayBinding<T>()
    const isString = (typeof<T>'string')
    const invalidMsg = useValidate(inputTitle, isString ? String(val) : Number(val), validationFuncsArr)
    return [val, onChangeVal, invalidMsg, setVal]
}

