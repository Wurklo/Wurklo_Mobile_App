import { createSlice } from "@reduxjs/toolkit";
import axios from '../axios';


//set initial state
const initialState = {
    project: 5
}

// change the state based on the called function
export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setHello: (state, action) => {
            state.project += action.payload;
        },
        setBye: (state) => {
            state.project = state.project;
        },
        // setBye: (state, action) => {
        //     state.bye = action.payload;
        //     console.log(state)
        // }
    },
})

//action creators are generated for each case reducer function
export const { setHello, setBye } = projectSlice.actions;

export default projectSlice.reducer;