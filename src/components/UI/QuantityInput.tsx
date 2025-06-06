import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { ChangeEventHandler, MouseEventHandler } from "react";

interface Props {
    val: number
    onChangeVal: ChangeEventHandler<HTMLInputElement>
    increment: MouseEventHandler<HTMLButtonElement>
    decrement: MouseEventHandler<HTMLButtonElement>
}

export default function QuantityInput({ val, onChangeVal, increment, decrement }: Props) {
    return (
        <span className="flex items-center">
            <button onClick={decrement}>
                <FontAwesomeIcon icon={faCaretLeft} color="#000" fontSize="1.25rem" />
            </button>
            <input type="number" value={val} onChange={onChangeVal} className="px-4 py-2 text-black outline-none max-w-14" />
            <button onClick={increment}>
                <FontAwesomeIcon icon={faCaretRight} color="#000" fontSize="1.25rem" />
            </button>
        </span>
    )
}