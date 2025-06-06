import { useDispatch, useSelector } from "react-redux";
import type { AppDispath, RootState } from "../store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispath>()
export const useAppSelector = useSelector.withTypes<RootState>()