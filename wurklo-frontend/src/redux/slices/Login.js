import { createSlice } from "@reduxjs/toolkit";
import axios from '../axios';

//set initial state
const initialState = {
    user: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

//action creators are generated for each case reducer function
export const { setUser } = loginSlice.actions;

export default loginSlice.reducer;
