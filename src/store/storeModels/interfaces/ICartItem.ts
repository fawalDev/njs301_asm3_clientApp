import type { IProduct } from "../../../interfaces/IProduct"

export default interface ICartItem extends IProduct {
    quantity?: number | string
    total?: number | string
}