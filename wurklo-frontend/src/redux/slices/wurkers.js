import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../axios';
import data from './data'

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

// upvote a wurker

// downvote a wurker


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
            const wurkerIndex = state.wurkers.findIndex((wurkers) => wurkers.id === id);
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
            const wurkerIndex = state.wurkers.findIndex((wurkers) => wurkers.id === id);
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
    }
})

//action creators are generated for each case reducer function
export const { setUpvote, setDownvote } = wurkersSlice.actions;

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