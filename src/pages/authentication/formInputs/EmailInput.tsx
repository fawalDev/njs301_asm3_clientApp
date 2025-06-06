import type InputProps from "./InputProps";

function EmailInput({ value, onChangeVal }: InputProps) {
    return (
        <input type="text" placeholder='Email' name="email"
            value={value} onChange={onChangeVal} />
    )
}

export default EmailInput;