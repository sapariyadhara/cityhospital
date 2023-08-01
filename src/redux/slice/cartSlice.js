import { createSlice } from "@reduxjs/toolkit"

export const initState = {
    items: [],
    error: null,
    loading: false
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initState,
    reducers: {
        addToCart: (state , action) => {
            console.log(action);
            let item = state.items.some((v) => v.pid === action.payload.pid)
            if (item) {
                let index = state.items.findIndex((v) => v.pid === action.payload.pid)
                state.items[index].qty++
            } else {
                state.items.push(action.payload)
            }
            

            state.items = state.items
          
            console.log(item, state);
        },
        incCartQty: (state, action) => {
            console.log(state.items, action.payload);
            let index = state.items.findIndex((v) => v.pid === action.payload)
            console.log(index);
            state.items[index].qty++

            state.items = state.items
           
        },
        decCartQty: (state, action) => {
            let index1 = state.items.findIndex((v) => v.pid === action.payload)
            state.items[index1].qty--

            state.items = state.items
           
        },
        deleteToCart: (state, action) => {
            state.items = state.items.filter((v) => v.pid !== action.payload)
          
        }
    }
})

export const {addToCart , incCartQty , decCartQty , deleteToCart} = cartSlice.actions
export default cartSlice.reducer