import store from "../../store";
import { hide } from "../../store/modalSlice";

// Use in every loader to ensure that modal alway be hide in the pointed page
export function hideModalDispath() {
    store.dispatch(hide())
}