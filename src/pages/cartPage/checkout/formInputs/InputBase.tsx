import { ChangeEventHandler, HTMLInputTypeAttribute } from "react"

interface InputProps {
    fieldName: string
    id?: string
    type?: HTMLInputTypeAttribute
    placeHolder: string
    val: string | number
    onChangeVal: ChangeEventHandler<HTMLInputElement>
}
export default function Input({ fieldName, id, type, placeHolder, val, onChangeVal }: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={id} className="text-zinc-500 uppercase">{fieldName}:</label>
            <input type={type || 'text'} id={id} placeholder={placeHolder} className="px-5 py-3 border outline-yellow-600"
                value={val} onChange={onChangeVal} />
        </div>

    );
}