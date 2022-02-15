import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../axios';
import data from './data'

export const getProjects = createAsyncThunk(
    "projects/getProjects",
    async () => {
        try {
            const response = await axios.get('/works')
            return response.data.data
        } catch (err) {
            console.log("Get projects failed: ", err)
        }
    }
)

export const voteProject = createAsyncThunk(
    "projects/updateProject",
    async (project) => {
        try {
            const response = await axios.put("/works/61fe5ee76b924c82c53b7513", {upvote: [...project.upvote, project.userId]})
            console.log("Response --------------------", response.data)
            return response.data
        } catch (err) {
            console.log("Project vote failed++++++++++++++++++++++: ", err)
        }
    }
)

// change the state based on the called functio
export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: "",
        status: null,
    },
    reducers: {
        setUpvote: (state, action) => {
            const index = state.projects.findIndex((obj) => obj._id === action.payload.id);
            if (action.payload.isDownvote === false) {
                return state.projects[index].upvote += 1;
            } else if (action.payload.isDownvote === true) {
                state.projects[index].upvote += 1;
                state.projects[index].downvote -= 1;
            }

        },
        setDownvote: (state, action) => {
            const index = state.projects.findIndex((obj) => obj._id === action.payload.id);
            if (action.payload.isUpvote === false) {
                state.projects[index].downvote += 1;
            } else if (action.payload.isUpvote === true) {
                state.projects[index].downvote += 1;
                state.projects[index].upvote -= 1;
            }
        },
        setSubractVote: (state, action) => {
            const index = state.projects.findIndex((obj) => obj._id === action.payload.id);
            if (action.payload.voteType === "upvote") {
                state.projects[index].upvote -= 1;
            } else if (action.payload.voteType === "downvote") {
                state.projects[index].downvote -= 1;
            }
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getProjects.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getProjects.fulfilled, (state, action) => {
                state.status = 'success';
                state.projects = action.payload;
            })
            .addCase(getProjects, (state, action) => {
                state.status = "failed";
            })
            .addCase(voteProject.fulfilled, (state, { payload }) => {
                console.log("Payload =================",payload)
            })
    }
})

//action creators are generated for each case reducer function
export const { setUpvote, setDownvote, setSubractVote } = projectsSlice.actions;

export default projectsSlice.reducer;
