import type { IProduct } from "../../../interfaces/IProduct";
import type ICartItem from "../interfaces/ICartItem";


export default class CartItem implements ICartItem {
    quantity?: string | number = 0
    total?: string | number
    totalCalc() {
        this.total = Number(this.price) * Number(this.quantity)
        return this.total
    }
    static createWithQuantity(product: IProduct, quantity?: number | string) {
        const item = new CartItem(product)
        item.quantity = Number(quantity) || 1
        item.totalCalc()
        return item
    }
    constructor(product: IProduct) {
        Object.assign(this, product)
        this.totalCalc()
    }
    _id?: {
        $oid?: string
    }
    category?: string
    img1?: string
    img2?: string
    img3?: string
    img4?: string
    long_desc?: string
    name?: string
    price?: string | number
    short_desc?: string
}