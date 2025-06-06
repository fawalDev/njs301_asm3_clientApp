import store from "../../store"
import { removeAllItem } from "../../store/cartSlice"
import StorageEnum from "./StorageEnum"

export function getLocalStorageCartItems() {
    return localStorage.getItem(StorageEnum.cartItems)
}

export function addLocalStorageCartItems(items: any[]) {
    const jsonString = JSON.stringify(items)
    localStorage.setItem(StorageEnum.cartItems, jsonString)
}

export function removeLocalStorageCartItems() {
    localStorage.removeItem(StorageEnum.cartItems)
    store.dispatch(removeAllItem())
}