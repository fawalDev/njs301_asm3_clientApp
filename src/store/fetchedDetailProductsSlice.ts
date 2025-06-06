import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../interfaces/IProduct";
import type IProductsListState from "./storeModels/interfaces/IProductsListState";



const initialState: IProductsListState = {
    products: []
}

const fetchedDetailProductsSlice = createSlice({
    name: 'fetchedDetailProductsSlice',
    initialState,
    reducers: {
        addOneProduct(state, action: PayloadAction<IProduct>) {
            state.products = [...state.products, action.payload]
        }
    }
})

export const { addOneProduct } = fetchedDetailProductsSlice.actions
export default fetchedDetailProductsSlice.reducer;