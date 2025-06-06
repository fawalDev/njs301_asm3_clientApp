import type { IProduct } from "../../../interfaces/IProduct";
import type ICartItem from "./ICartItem";


export default interface IProductState {
    product: IProduct | ICartItem
}