import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    chat: [
        [0, 'agent', 'Xin chào, tôi giúp được gì cho bạn?']
    ]

}
const livechatSlice = createSlice({
    name: "livechat",
    initialState,
    reducers: {
        // payload is an array of key-pair values, 
        //  [0]: number 0-agent 1-user
        //  [1]: id of user / agent,
        //  [2]: sended message
        msgAction(state, action: PayloadAction<[number, string, string]>) {
            state.chat = [
                ...state.chat,
                action.payload
            ]
        }
    }
})

export const { msgAction } = livechatSlice.actions
export default livechatSlice.reducer