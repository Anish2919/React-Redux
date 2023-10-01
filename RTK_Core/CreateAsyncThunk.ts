import { AnyAction, PayloadAction, configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';  
import {logger} from 'redux-logger'; 

let API: string = 'https://jsonplaceholder.typicode.composts/1';  

interface POST {
    userId: number, 
    id: number, 
    title: string, 
    body: string
}

// interface for initial state 
interface INITIAL_STATE {
    posts: {}, 
    loading: 'idle' | 'pending' | 'fulfilled' | 'failed', 
    error: any 
}

// initial state 
const initialState: INITIAL_STATE = {
    posts: {},  
    loading: 'idle', 
    error: '',  
} 


// first create asyn thunk 
const fetchPost = createAsyncThunk('post/fetchPosts', async () => {
    const response = await axios.get(API); 
    return response.data; 
}); 


const postsSlice =  createSlice({
    name: "posts", 
    initialState, 
    reducers: {}, 
    extraReducers(builder) {
        builder
            .addCase(fetchPost.pending, (state, action) => {
                state.loading = 'pending'; 
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.loading = 'fulfilled'; 
                state.posts = action.payload; 
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.loading = 'failed'; 
                state.posts = []; 
                state.error = action.error.message; 
            })
    },
}); 

const postsReducer = postsSlice.reducer; 

const store = configureStore({
    reducer: postsReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),  
}) 


store.subscribe(() => {
    console.log(store.getState()); 
}) 

store.dispatch(fetchPost()); 


