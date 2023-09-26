import { FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, SEARCH_POST_ERROR, SEARCH_POST_REQUEST, SEARCH_POST_SUCCESS } from "../actions/postActionTypes";

const initalState:InitalState = {
    loading: false, 
    error: '', 
    posts: [], 
    post: {}, 
} 


// reducers 
export const postReducer = (state=initalState, action: any) => {
    switch(action.type) {
        // request 
        case FETCH_POSTS_REQUEST: 
            return {
                ...state, 
                loading: true,
            } 
        // success 
        case FETCH_POSTS_SUCCESS: 
            return {
                ...state, 
                posts: action.payload, 
                loading: false, 
            }  
        // success 
        case FETCH_POSTS_ERROR: 
            return {
                ...state, 
                error: action.payload, 
                loading: false, 
            } 
        // ========== FETCH SINGLE POST ==== 
        case SEARCH_POST_REQUEST: 
            return {
                ...state, 
                loading: true, 
            } 
        case SEARCH_POST_SUCCESS: 
            return {
                ...state, 
                loading: false, 
                post: action.payload, 
                posts: [action.payload], 
                error:''
            } 
        case SEARCH_POST_ERROR: 
            return {
                ...state, 
                loading: false, 
                error: action.payload, 
            }
        default: return state; 

    }
} 


