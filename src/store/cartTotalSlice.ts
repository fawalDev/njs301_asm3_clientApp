import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type ICartItem from "./storeModels/interfaces/ICartItem";

const initialState = {
    total: 0
}

const cartTotalSlice = createSlice({
    name: "cart-total",
    initialState,
    reducers: {
        setTotal(state, action: PayloadAction<ICartItem[]>) {
            let total: number = 0
            for (const i of action.payload) {
                total += Number(i.total!)
            }
            state.total = total
        }
    }
})

export const { setTotal } = cartTotalSlice.actions
export default cartTotalSlice.reducer