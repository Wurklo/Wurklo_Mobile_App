import { createSlice } from "@reduxjs/toolkit";
import axios from '../axios';
import data from './data'

//set initial state
const initialState = {
    wurkers: data.WURKERS
}

// change the state based on the called function
export const wurkersSlice = createSlice({
    name: 'wurkers',
    initialState,
    reducers: {
        setHello: (state, action) => {
            state.wurkers += action.payload;
        },
        setBye: (state) => {
            state.wurkers = state.wurkers;
        },
        // setBye: (state, action) => {
        //     state.bye = action.payload;
        //     console.log(state)
        // }
    },
})

//action creators are generated for each case reducer function
export const { setHello, setBye } = wurkersSlice.actions;

export default wurkersSlice.reducer;


    // get projects and store them in projects useState axios method may change to thunk for redux
    // useEffect(() => {
    //     axios.get('/api/v1/works').then((response) => {
    //         if (response.data.data.length > 0) {
    //             setProjects(response.data);
    //         } else {
    //             console.log(response.data)
    //         }
    //     });
    // }, [])