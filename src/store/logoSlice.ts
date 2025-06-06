import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

enum logoState {
    base = 'base',
    scrollDown = 'scroll-down',
    scrollUp = 'scroll-up'
}

interface LogoState {
    state: string
    animationAccept: boolean
}
const initialState: LogoState = {
    state: logoState.base,
    animationAccept: true
}

const logoSlice = createSlice({
    name: 'logo-state',
    initialState,
    reducers: {
        setLogoState(state, action: PayloadAction<string>) {
            state.state = action.payload
        },
        setLogoAnimationAccept(state, action: PayloadAction<boolean>) {
            state.animationAccept = action.payload
        }
    }
})

export const { setLogoState, setLogoAnimationAccept } = logoSlice.actions
export default logoSlice.reducer