import { useAppDispatch, useAppSelector } from "./reduxHooks"
import { setLogoState } from "../store/logoSlice"
import { useEffect } from "react"

export default function useScrollToTopPage() {
    const animationAccept = useAppSelector(({ logoState }) => logoState.animationAccept)
    const dispath = useAppDispatch()

    useEffect(() => {
        scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }, [])

    useEffect(() => {
        if (window.scrollY === 0)
            animationAccept && dispath(setLogoState('scroll-up'))
    }, [animationAccept])
}