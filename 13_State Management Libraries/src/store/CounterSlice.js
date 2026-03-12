import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value : 0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    
    reducers: { // that handle multiple actoins related to counter.
        increment:(data) => { // state == data (any varible name that hold value / data);
            data.value += 1;
        },

        decrement:(state) => {
            state.value -= 1;
        },

        incrementByAmount:(state, action) => {
            state.value += action.payload;
        },
    },
})

export const {increment , decrement , incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;