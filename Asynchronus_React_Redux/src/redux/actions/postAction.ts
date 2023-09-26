// action types
// action creator
// inital state 
// reducer 
// store  

// action types: 

// request started
// success
// request failed 

import axios from 'axios'; 
import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR,SEARCH_POST_REQUEST,SEARCH_POST_SUCCESS,SEARCH_POST_ERROR } from './postActionTypes';
const apiURL = 'https://jsonplaceholder.typicode.com/posts'; 


// action creator 
// fetch posts (request started, success, error)

// fetch posts request 
const fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST, 
    }
} 

// fetch posts success: 
const fetchPostsSuccess = (posts: Post[]) => {
    return {
        type: FETCH_POSTS_SUCCESS, 
        payload: posts, 
    }
} 

// fetch posts error 
const fetchPostsErr = (error: any) => {
    return {
        type: FETCH_POSTS_ERROR, 
        payload: error,  
    }
} 

// action creator to fetching posts 
export const fetchPostsAction = ():any => {
    return async (dispatch: any) => {
        // request action 
        dispatch(fetchPostsRequest())
        try {
            const res = await axios.get(apiURL); 
            console.log(res.data);
            // dispatch success action 
            dispatch(fetchPostsSuccess(res.data)); 
        } catch(error) {
            // dispatch failure action 
            dispatch(fetchPostsErr(error))
        }
    }
}

//******  */ FETCH POST 

// request action 
const fetchPostRequest = () => {
    return {
        type: SEARCH_POST_REQUEST, 
    }
}   

// post success action 
const fetchPostSuccess = (post: Post) => {
    return {
        type: SEARCH_POST_SUCCESS, 
        payload: post, 
    }
}

// post error action 
const fetchPostErr = (error: any) => {
    return {
        type: SEARCH_POST_ERROR, 
        payload: error, 
    }
} 

// fetch Post action creator 
export const fetchPostAction = (id: number) => {
    return async (dispatch: any) => {
        // request action 
        await dispatch(fetchPostRequest()); 
        try {
            const res = await axios.get(`${apiURL}/${id}`); 
            // success action 
            await dispatch(fetchPostSuccess(res.data)); 
        } catch (error) {
            // failure action 
            dispatch(fetchPostErr(error)); 
        }
    }
}; 

