import { useEffect } from "react"
import { useNavigation } from "react-router-dom"

export default function useScrollToTopWhenPageIdle() {
    const navigationState = useNavigation().state

    useEffect(() => {
        navigationState === 'idle' && scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [navigationState])

}
