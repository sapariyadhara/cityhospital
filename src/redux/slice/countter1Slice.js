import { createSlice } from "@reduxjs/toolkit"

const intisState = {
    counter1 : 0
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState : intisState,
    reducers: {
        decrement : (state , action) => {
            state.counter1 += 1
        },
        increment : (state , action) => {
            state.counter1 -= 1
        }
    }
})

export const {decrement , increment } = counterSlice.actions
export default counterSlice.reducer