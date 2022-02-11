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
// console.log("projectId_filter: ", initialState.projects.filter((obj) => obj._id === '61fedb81219b272b68115c0a'))

// change the state based on the called functio
export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setUpvote: (state, action) => {
            const index = initialState.projects.findIndex((obj) => obj._id === action.payload.id);
            // console.log("Payload: ", action.payload)
            // console.log("Index: ", action.payload)
            if (action.payload.isDownvote === false){
                state.projects[index].upvote += 1;
            } else if (action.payload.isDownvote === true) {
                state.projects[index].upvote += 1;
                state.projects[index].downvote -= 1;
            } else {
                return state;
            }

        },
        setDownvote: (state, action) => {
            const index = initialState.projects.findIndex((obj) => obj._id === action.payload.id);
            if (action.payload.isUpvote === false) {
                state.projects[index].downvote += 1;
            } else if (action.payload.isUpvote === true) {
                state.projects[index].downvote += 1;
                state.projects[index].upvote -= 1;
            } else {
                return state;
            }
        },
        setSubractVote: (state, action) => {
            const index = initialState.projects.findIndex((obj) => obj._id === action.payload.id);
            if (action.payload.voteType === "upvote") {
                state.projects[index].upvote -= 1;
            } else if (action.payload.voteType === "downvote") {
                state.projects[index].downvote -= 1;
            } else {
                return state;
            }
        },
    },
})

//action creators are generated for each case reducer function
export const { setUpvote, setDownvote, setSubractVote } = projectsSlice.actions;

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

// handle voting
// const handleVote = (voteType) => {
//     if (voteType === "upvote" && isDownvote === false) {
//         axios.put(`/api/v1/works/${id}`, { upvote: upvote + 1 })
//     } else if (voteType === "upvote" && isDownvote === true) {
//         setIsDownvote(false);
//         axios.put(`/api/v1/works/${id}`, {
//             upvote: upvote + 1,
//             downvote: downvote - 1,
//         })
//     } else if (voteType === "downvote" && isUpvote === false) {
//         axios.put(`/api/v1/works/${id}`, { downvote: downvote + 1 })
//     } else if (voteType === "downvote" && isUpvote === true) {
//         setIsUpvote(false);
//         axios.put(`/api/v1/works/${id}`, {
//             upvote: upvote - 1,
//             downvote: downvote + 1,
//         })

//     } else {
//         console.log("You picked a bad function")
//     }
// }

// const subtractOne = (voteType) => {
//     if (voteType === "upvote") {
//         axios.put(`/api/v1/works/${id}`, { upvote: upvote - 1 })
//     } else {
//         axios.put(`/api/v1/works/${id}`, { downvote: downvote - 1 })
//     }
// }