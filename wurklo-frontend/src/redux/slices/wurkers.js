import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../axios';

// get wurkers
// put them in the state
export const getWurkers = createAsyncThunk(
    "wurkers/getWurkers",
    async () => {
        try {
            const response = await axios.get('/wurkers')
            return response.data.data
        } catch (err) {
            console.log("Get wurkers failed: ", err)
        }
    }
)

// create a wurker

// update a wurker

// upvote a project
export const upvoteWurker = createAsyncThunk(
    "wurkers/upvoteWurker",
    async ({ downvote, upvote, userId, id }) => {
        if (upvote.indexOf(userId) !== -1) {
            try {
                const response = await axios.put(`/wurkers/${id}`, { upvote: upvote.filter(id => id !== userId) })
                return response.data
            } catch (err) {
                console.log("Wurker upvote removal failed: ", err)
            }
        } else {
            if (downvote.indexOf(userId) !== -1) {
                try {
                    const response = await axios.put(`/wurkers/${id}`, { upvote: [...upvote, userId], downvote: downvote.filter(id => id !== userId) })
                    return response.data
                } catch (err) {
                    console.log("Wurker upvote failed: ", err)
                }
            } else {
                try {
                    const response = await axios.put(`/wurkers/${id}`, { upvote: [...upvote, userId] })
                    return response.data
                } catch (err) {
                    console.log("Wurker upvote failed: ", err)
                }
            }
        }
    }
)

// downvote a project
export const downvoteWurker = createAsyncThunk(
    "wurkers/downvoteWurker",
    async ({ downvote, upvote, userId, id }) => {
        if (downvote.indexOf(userId) !== -1) {
            try {
                const response = await axios.put(`/wurkers/${id}`, { downvote: downvote.filter(id => id !== userId) })
                return response.data
            } catch (err) {
                console.log("Wurker subtract downvote failed: ", err)
            }
        } else {
            if (upvote.indexOf(userId) !== -1) {
                try {
                    const response = await axios.put(`/wurkers/${id}`, { downvote: [...downvote, userId], upvote: upvote.filter(id => id !== userId) })
                    return response.data
                } catch (err) {
                    console.log("Wurker downvote failed: ", err)
                }
            } else {
                try {
                    const response = await axios.put(`/wurkers/${id}`, { downvote: [...downvote, userId] })
                    return response.data
                } catch (err) {
                    console.log("Wurker downvote failed: ", err)
                }
            }
        }
    }
)


// find by id or obj variable array
// console.log(initialState.wurkers)
// console.log("wurkerId: ", initialState.wurkers.map(wurker => wurker.id).indexOf(0));
// console.log("wurkerId_filter: ", initialState.wurkers.filter((obj) => obj.id === 0))

// change the state based on the called function
export const wurkersSlice = createSlice({
    name: 'wurkers',
    initialState: {
        wurkers: null,
        status: null,
    },
    reducers: {
        setDownvote: (state, { payload: { id, upvote, downvote, userId } }) => {
            const wurkerIndex = state.wurkers.findIndex((wurkers) => wurkers._id === id);
            const voteIndex = downvote.indexOf(userId);
            if (voteIndex !== -1) {
                state.wurkers[wurkerIndex].downvote = downvote.filter(id => id !== userId);
            } else {
                if (upvote.indexOf(userId !== -1)) {
                    state.wurkers[wurkerIndex].downvote = [...downvote, userId];
                    state.wurkers[wurkerIndex].upvote = upvote.filter(id => id !== userId);
                } else {
                    state.wurkers[wurkerIndex].downvote = [...downvote, userId];
                }
            }
        },
        setUpvote: (state, { payload: { id, upvote, downvote, userId } }) => {
            const wurkerIndex = state.wurkers.findIndex((wurkers) => wurkers._id === id);
            const voteIndex = upvote.indexOf(userId);
            if (voteIndex !== -1) {
                state.wurkers[wurkerIndex].upvote = upvote.filter(id => id !== userId);
            } else {
                if (upvote.indexOf(userId !== -1)) {
                    state.wurkers[wurkerIndex].upvote = [...upvote, userId];
                    state.wurkers[wurkerIndex].downvote = downvote.filter(id => id !== userId);
                } else {
                    state.wurkers[wurkerIndex].upvote = [...upvote, userId];
                }
            }
        },

    },
    extraReducers: builder => {
        builder
            .addCase(getWurkers.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getWurkers.fulfilled, (state, action) => {
                state.status = 'success';
                state.wurkers = action.payload;
            })
            .addCase(getWurkers, (state, action) => {
                state.status = "failed";
            })
            .addCase(upvoteWurker.fulfilled, (state, { payload }) => {
                const index = state.wurkers.findIndex((wurker) => wurker._id === payload.data._id);
                state.wurkers[index].upvote = payload.data.upvote
                state.wurkers[index].downvote = payload.data.downvote
            })
            .addCase(downvoteWurker.fulfilled, (state, { payload }) => {
                const index = state.wurkers.findIndex((wurker) => wurker._id === payload.data._id);
                state.wurkers[index].downvote = payload.data.downvote
                state.wurkers[index].upvote = payload.data.upvote
            })
    }
})

//action creators are generated for each case reducer function
export const { setUpvote, setDownvote } = wurkersSlice.actions;

export default wurkersSlice.reducer;