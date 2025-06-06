import type { IProduct } from "../../../interfaces/IProduct";
import type ICartState from "../../../store/storeModels/interfaces/ICartState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal, { useHideModal } from "../../../components/UI/Modal";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { removeItem } from "../../../store/cartSlice";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import convertToFraction from "../../../ultil/convertToFraction";
import CartItemQuantityInput from "./CartItemQuantityInput";

export default function CartItemModal() {
    const { items: itemsList, currentItemIndex: curIndex }: ICartState = useAppSelector(({ cart }) => cart)
    const item = itemsList[curIndex] || {}

    const hideModal = useHideModal()
    const dispatch = useAppDispatch()
    const remove = (i: IProduct) => {
        dispatch(removeItem(i._id?.$oid || ''))
        hideModal()
    }


    return (
        <Modal>

            <div className="py-4 px-3 grid grid-cols-5 justify-between items-center gap-4 italic">
                <span className="overflow-hidden col-start-1 col-end-3 uppercase">Image</span>
                <span className="overflow-hidden col-start-3 -col-end-1"><img src={item.img1} alt={item.name} className="mx-auto w-28 md:w-32" /></span>

                <span className="overflow-hidden col-start-1 col-end-3 uppercase">Product</span>
                <span className="overflow-hidden col-start-3 -col-end-1">{item.name}</span>

                <span className="overflow-hidden col-start-1 col-end-3 uppercase">Price</span>
                <span className="overflow-hidden col-start-3 -col-end-1">{convertToFraction(item.price)} VNĐ</span>

                <span className="overflow-hidden col-start-1 col-end-3 uppercase">Quantity</span>
                <span className="overflow-hidden col-start-3 -col-end-1">
                    <CartItemQuantityInput item={item} />
                </span>

                <span className="overflow-hidden col-start-1 col-end-3 uppercase">Total</span>
                <span className="overflow-hidden col-start-3 -col-end-1">{convertToFraction(Number(item.total))}</span>

                <span className="overflow-hidden col-start-1 col-end-3 uppercase">Remove</span>
                <span className="overflow-hidden col-start-3 -col-end-1">
                    <button onClick={() => remove(item)}>
                        <FontAwesomeIcon icon={faTrashCan} className="text-zinc-400" />
                    </button>
                </span>
            </div>
        </Modal>
    )
}