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

// create a project
// fancy funtion here ......
export const createProject = createAsyncThunk(
    "projects/createProject",
    async (postData) => {
        // sending image to s3 bucket and getting a url to store in d

        const response = await axios.get("/s3")
        const s3Url = await axios.put(response.data.data, postData.image)
        console.log("s3Url: ", s3Url)
        console.log(response.data.data)
        // post image directly to s3 bucket
        // make another request to my server to store extra data
        try {
            const response = await axios.post('/works', postData)
            return response.data.data;
        } catch (err) {
            console.log("Create projects failed: ", err)
        }
    }
)

// update a project
// fancy funtion here ......


// upvote a project
export const upvoteProject = createAsyncThunk(
    "projects/upvoteProject",
    async ({ downvote, upvote, userId, id }) => {
        if (upvote.indexOf(userId) !== -1) {
            try {
                const response = await axios.put(`/works/${id}`, { upvote: upvote.filter(id => id !== userId) })
                return response.data
            } catch (err) {
                console.log("Project upvote removal failed: ", err)
            }
        } else {
            if (downvote.indexOf(userId) !== -1) {
                try {
                    const response = await axios.put(`/works/${id}`, { upvote: [...upvote, userId], downvote: downvote.filter(id => id !== userId) })
                    return response.data
                } catch (err) {
                    console.log("Project upvote failed: ", err)
                }
            } else {
                try {
                    const response = await axios.put(`/works/${id}`, { upvote: [...upvote, userId] })
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
    async ({ downvote, upvote, userId, id }) => {
        if (downvote.indexOf(userId) !== -1) {
            try {
                const response = await axios.put(`/works/${id}`, { downvote: downvote.filter(id => id !== userId) })
                return response.data
            } catch (err) {
                console.log("Project subtract downvote failed: ", err)
            }
        } else {
            if (upvote.indexOf(userId) !== -1) {
                try {
                    const response = await axios.put(`/works/${id}`, { downvote: [...downvote, userId], upvote: upvote.filter(id => id !== userId) })
                    return response.data
                } catch (err) {
                    console.log("Project downvote failed: ", err)
                }
            } else {
                try {
                    const response = await axios.put(`/works/${id}`, { downvote: [...downvote, userId] })
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
        setDownvote: (state, { payload: { id, upvote, downvote, userId } }) => {
            const projectIndex = state.projects.findIndex((projects) => projects._id === id);
            const voteIndex = downvote.indexOf(userId);
            if (voteIndex !== -1) {
                state.projects[projectIndex].downvote = downvote.filter(id => id !== userId);
            } else {
                if (upvote.indexOf(userId !== -1)) {
                    state.projects[projectIndex].downvote = [...downvote, userId];
                    state.projects[projectIndex].upvote = upvote.filter(id => id !== userId);
                } else {
                    state.projects[projectIndex].downvote = [...downvote, userId];
                }
            }
        },
        setUpvote: (state, { payload: { id, upvote, downvote, userId } }) => {
            const projectIndex = state.projects.findIndex((projects) => projects._id === id);
            const voteIndex = upvote.indexOf(userId);
            if (voteIndex !== -1) {
                state.projects[projectIndex].upvote = upvote.filter(id => id !== userId);
            } else {
                if (upvote.indexOf(userId !== -1)) {
                    state.projects[projectIndex].upvote = [...upvote, userId];
                    state.projects[projectIndex].downvote = downvote.filter(id => id !== userId);
                } else {
                    state.projects[projectIndex].upvote = [...upvote, userId];
                }
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
            .addCase(upvoteProject.fulfilled, (state, { payload }) => {
                const index = state.projects.findIndex((project) => project._id === payload.data._id);
                state.projects[index].upvote = payload.data.upvote
                state.projects[index].downvote = payload.data.downvote
            })
            .addCase(downvoteProject.fulfilled, (state, { payload }) => {
                const index = state.projects.findIndex((project) => project._id === payload.data._id);
                state.projects[index].downvote = payload.data.downvote
                state.projects[index].upvote = payload.data.upvote
            })
            .addCase(createProject.fulfilled, (state, { payload }) => {
                state.projects = [...state.projects, payload]
            })
    }
})

//action creators are generated for each case reducer function
export const { setUpvote, setDownvote } = projectsSlice.actions;

export default projectsSlice.reducer;
