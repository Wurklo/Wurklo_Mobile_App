import { createSlice } from "@reduxjs/toolkit";

//set initial state
const initialState = {
    greeting: null
}

// change the state based on the called function
export const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    reducers: {
        setHello: (state) => {
            state.greeting = 'Hello World!';
            console.log(state)
        },
        setBye: (state) => {
            state.greeting = 'Bye Bye!';
            console.log(state)
        },
        // setBye: (state, action) => {
        //     state.bye = action.payload;
        //     console.log(state)
        // }
    },
})

//action creators are generated for each case reducer function
export const { setHello, setBye } = greetingSlice.actions;

export default greetingSlice.reducer;