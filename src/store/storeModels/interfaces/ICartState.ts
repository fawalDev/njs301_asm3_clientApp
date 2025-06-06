import type ICartItem from "./ICartItem"

export interface ICartState {
    items: ICartItem[]
    currentItemIndex: number
}

export interface IItemWithQuantityPayload {
    item: ICartItem
    quantity: number | string
}
