import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../interfaces/IProduct";
import type IProductState from "./storeModels/interfaces/IProductState";

const initialState: IProductState = {
    product: {}
}
const productModalSlice = createSlice({
    name: 'product-modal',
    initialState,
    reducers: {
        setProduct(state, action: PayloadAction<IProduct>) {
            state.product = action.payload
        }
    }
})

export const { setProduct } = productModalSlice.actions
export default productModalSlice.reducer