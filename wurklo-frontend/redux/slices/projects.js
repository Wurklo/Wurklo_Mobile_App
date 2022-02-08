import { createSlice } from "@reduxjs/toolkit";
import axios from '../axios';
import data from './data'

//set initial state
const initialState = {
    projects: data.PROJECTS
}

// find by id or obj variable array
// console.log(initialState.projects)
// console.log("projectId: ", initialState.projects.map(project => project._id).indexOf('61fedb81219b272b68115c0a'));
// console.log("projectId_findIndex: ", initialState.projects.findIndex((obj) => obj._id === '61fedb81219b272b68115c0a'))
console.log("projectId_filter: ", initialState.projects.filter((obj) => obj._id === '61fedb81219b272b68115c0a'))

// change the state based on the called functio
export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setUpvote: (state, action) => {
            state.projects.upvote += action.payload;
        },
        setDownvote: (state, action) => {
            state.projects.downvote += action.payload;
        },
        // setBye: (state, action) => {
        //     state.bye = action.payload;
        //     console.log(state)
        // }
    },
})

//action creators are generated for each case reducer function
export const { setHello, setBye } = projectsSlice.actions;

export default projectsSlice.reducer;


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