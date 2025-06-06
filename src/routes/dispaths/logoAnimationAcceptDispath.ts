import store from "../../store";
import { setLogoAnimationAccept } from "../../store/logoSlice";

export function logoAnimationAcceptDispath(boolean: boolean) {
    store.dispatch(setLogoAnimationAccept(boolean))
}