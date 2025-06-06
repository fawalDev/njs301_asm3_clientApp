import { faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { useEffect, useState } from "react";
import { setTotal } from "../../../store/cartTotalSlice";
import convertToFraction from "../../../ultil/convertToFraction";
import useTwoWayBinding from "../../../hooks/useTwoWayBinding";
import DarkButton from "../../../components/UI/DarkButton";
import TotalSideLayout from "../TotalSideLayout";

interface Props {
    className: string
}
function CartTotal({ className }: Props) {
    const total = useAppSelector(({ cartTotal }) => cartTotal.total)
    const cartItems = useAppSelector(({ cart }) => cart)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setTotal(cartItems.items))
    }, [cartItems])

    const [coupon, onChangeCoupon] = useTwoWayBinding<string>()
    const [informHeight, setInformHeight] = useState<string>('h-0')

    return (
        <TotalSideLayout className={className}>
            <h4 className="text-2xl">Cart total</h4>
            <div>
                <div className="flex justify-between">
                    <h6 >Subtotal</h6>
                    <span className="text-sm text-zinc-500">{convertToFraction(total)} VND</span>
                </div>
                <hr className="my-2 bg-zinc-500" />
                <div className="flex justify-between">
                    <h6 className="text-">Total</h6>
                    <span >{convertToFraction(total)} VND</span>
                </div>
            </div>
            <div>
                <input type="text" placeholder="Enter your coupon" className="w-full border p-3"
                    value={coupon} onChange={onChangeCoupon} />
                <div className={`overflow-hidden text-sm m-2 duration-150 ${informHeight}`}>
                    Your coupon was applyed
                </div>
                <DarkButton onClick={() => setInformHeight('h-10')} className="w-full py-3 bg-zinc-900 text-white capitalize italic ">
                    <FontAwesomeIcon icon={faGift} className="mr-4" />
                    Apply coupon
                </DarkButton>
            </div>
        </TotalSideLayout>
    );
}

export default CartTotal;