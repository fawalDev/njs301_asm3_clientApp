import type ICartItem from "../../../store/storeModels/interfaces/ICartItem"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks"
import { removeItem, setCurrentItemIndex } from "../../../store/cartSlice"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import convertToFraction from "../../../ultil/convertToFraction"
import { show } from "../../../store/modalSlice"
import CartItemModal from "./CartItemModal"
import CartItemQuantityInput from "./CartItemQuantityInput"

interface Props {
    className: string
}
export default function CartItemsTable({ className }: Props) {
    const cartItems = useAppSelector(({ cart }) => cart.items)
    const dispatch = useAppDispatch()
    const remove = (i: ICartItem) => dispatch(removeItem(i._id?.$oid || ''))

    function showModal(index: number) {
        dispatch(setCurrentItemIndex(index))
        dispatch(show())
    }

    return (
        <>
            <CartItemModal />
            <table className={`text-center ${className} `}>
                <thead className="p-4">
                    <tr className=" uppercase bg-zinc-50">
                        <th className="p-4 font-light">Image</th>
                        <th className="font-light">Product</th>
                        <th className="font-light hidden md:table-cell">Price</th>
                        <th className="font-light">Quantity</th>
                        <th className="font-light">Total</th>
                        <th className="font-light hidden md:table-cell">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((i, index) =>
                        <tr key={i._id?.$oid} >
                            <td onClick={() => showModal(index)} className="hover:cursor-pointer py-4">
                                <img src={i.img1} alt={i.name} className="mx-auto md:w-48" />
                            </td>
                            <td onClick={() => showModal(index)} className="hover:cursor-pointer">
                                {i.name}
                            </td>
                            <td className="hidden md:table-cell text-zinc-500">{convertToFraction(i.price)} VNĐ</td>
                            <td>
                                <CartItemQuantityInput item={i} />
                            </td>
                            <td className="text-zinc-500">{convertToFraction(Number(i.total))} VNĐ</td>
                            <td className="hidden md:table-cell">
                                <button onClick={() => remove(i)}>
                                    <FontAwesomeIcon icon={faTrashCan} className="text-zinc-400" />
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table >
        </>
    )
}