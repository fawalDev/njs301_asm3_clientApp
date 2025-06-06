import useTwoWayBinding from "../../hooks/useTwoWayBinding";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addItemWithQuantity } from "../../store/cartSlice";
import { IProduct } from "../../interfaces/IProduct";
import { useNavigate } from "react-router-dom";
import { PageUrlsList } from "../../ultil/clientRoutes";
import QuantityInput from "../../components/UI/QuantityInput";
import DarkButton from "../../components/UI/DarkButton";

interface Props {
    productToAdd: IProduct
}
function AddToCartBtn({ productToAdd }: Props) {
    const [val, onChangeVal, setVal] = useTwoWayBinding<number>(1)
    const increment = () => setVal(prev => ++prev)
    const decrement = () => setVal(prev => --prev)


    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const addToCart = () => {
        dispatch(addItemWithQuantity({ item: productToAdd, quantity: val }))
        navigate(PageUrlsList.Cart)
    }
    return (
        <div className="flex fade-in">
            <div className="flex gap-4 items-center border border-zinc-950">
                <span className="px-4 py-2 uppercase">Quantity</span>
                <QuantityInput val={val} onChangeVal={onChangeVal} increment={increment} decrement={decrement} />
                <DarkButton onClick={addToCart} className="px-8 py-2 capitalize italic ">Add to cart</DarkButton>
            </div>
        </div>
    );
}

export default AddToCartBtn;
