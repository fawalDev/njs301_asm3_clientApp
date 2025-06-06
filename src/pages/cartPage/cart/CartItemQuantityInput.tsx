import QuantityInput from "../../../components/UI/QuantityInput"
import { ChangeEvent } from "react"
import ICartItem from "../../../store/storeModels/interfaces/ICartItem"
import { useAppDispatch } from "../../../hooks/reduxHooks"
import { updateItemQuantity } from "../../../store/cartSlice"

interface Props {
    item: ICartItem
}
export default function CartItemQuantityInput({ item }: Props) {
    const dispatch = useAppDispatch()
    const onChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateItemQuantity({ item: item, quantity: (Number(e.target.value)) }))
    }
    const increment = () => dispatch(updateItemQuantity({ item: item, quantity: Number(item.quantity) + 1 }))
    const decrement = () => dispatch(updateItemQuantity({ item: item, quantity: Number(item.quantity) - 1 }))

    return (
        <QuantityInput val={Number(item.quantity) || 0} onChangeVal={onChangeQuantity} increment={increment} decrement={decrement} />
    )
}
