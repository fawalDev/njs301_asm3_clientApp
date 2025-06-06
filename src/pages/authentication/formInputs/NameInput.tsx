import type InputProps from "./InputProps";

function NameInput({ value, onChangeVal }: InputProps) {
    return (
        <input type="text" placeholder='Full Name'
            value={value} onChange={onChangeVal} />
    )
}

export default NameInput;