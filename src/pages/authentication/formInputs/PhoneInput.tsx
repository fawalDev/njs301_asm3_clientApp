import type InputProps from "./InputProps";

function PhoneInput({ value, onChangeVal }: InputProps) {
    return (
        <input type="number" placeholder='Phone'
            value={value} onChange={onChangeVal} />
    )
}

export default PhoneInput;