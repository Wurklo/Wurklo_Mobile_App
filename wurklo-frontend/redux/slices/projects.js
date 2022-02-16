import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../axios';

// get projects
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

// upvote a project
export const upvoteProject = createAsyncThunk(
    "projects/upvoteProject",
    async ({downvote, upvote, userId, id}) => {
        if (upvote.indexOf(userId) !== -1) {
            try {
                const response = await axios.put(`/works/${id}`, {upvote: upvote.filter(id => id !== userId)})
                return response.data
            } catch (err) {
                console.log("Project upvote failed: ", err)
            }
        } else {
            if (downvote.indexOf(userId) !== -1) {
                try {
                    const response = await axios.put(`/works/${id}`, {upvote: [...upvote, userId], downvote: downvote.filter(id => id !== userId)})
                    return response.data
                } catch (err) {
                    console.log("Project upvote failed: ", err)
                }
            } else {
                try {
                    const response = await axios.put(`/works/${id}`, {upvote: [...upvote, userId]})
                    return response.data
                } catch (err) {
                    console.log("Project upvote failed: ", err)
                }
            }
        }
    }
)

// downvote a project
export const downvoteProject = createAsyncThunk(
    "projects/downvoteProject",
    async ({downvote, upvote, userId, id}) => {
        if (downvote.indexOf(userId) !== -1) {
            try {
                const response = await axios.put(`/works/${id}`, {downvote: downvote.filter(id => id !== userId)})
                return response.data
            } catch (err) {
                console.log("Project subtract downvote failed: ", err)
            }
        } else {
            if (upvote.indexOf(userId) !== -1) {
                try {
                    const response = await axios.put(`/works/${id}`, {downvote: [...downvote, userId], upvote: upvote.filter(id => id !== userId)})
                    return response.data
                } catch (err) {
                    console.log("Project downvote failed: ", err)
                }
            } else {
                try {
                    const response = await axios.put(`/works/${id}`, {downvote: [...downvote, userId]})
                    return response.data
                } catch (err) {
                    console.log("Project downvote failed: ", err)
                }
            }
        }
    }
)

// change the state based on the called functio
export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: null,
        status: null,
    },
    reducers: {
        // add local state reducers here
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
            .addCase(upvoteProject.fulfilled, (state, { payload }) => {
                const index = state.projects.findIndex((obj) => obj._id === payload.data._id);
                state.projects[index].upvote = payload.data.upvote
                state.projects[index].downvote = payload.data.downvote
            })
            .addCase(downvoteProject.fulfilled, (state, { payload }) => {
                const index = state.projects.findIndex((obj) => obj._id === payload.data._id);
                state.projects[index].downvote = payload.data.downvote
                state.projects[index].upvote = payload.data.upvote
            })
    }
})

//action creators are generated for each case reducer function
export const { setUpvote, setDownvote, setSubractVote } = projectsSlice.actions;

export default projectsSlice.reducer;
