import type InputProps from "./InputProps";

function PasswordInput({ value, onChangeVal }: InputProps) {
    return (
        <input type="password" placeholder='Password'
            value={value} onChange={onChangeVal} />
    )
}

export default PasswordInput;