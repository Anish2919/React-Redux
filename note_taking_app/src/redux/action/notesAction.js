// initial state
// notes: []  


// action 
// Add action
// Delete action
// fetch notes


// reducer

// store

const initialState = {
    notes: [], 
}  

const ADD_NOTE = 'ADD_NOTE'; 
const DELETE_NOTE='DELETE_NOTE'; 
const FETCH_NOTE='FETCH_NOTE'; 


const addNoteAction = (note) => {
    return {
        type:ADD_NOTE, 
        payload: note, 
    }
} 

const deleteNoteAction = (id) => {
    return {
        type: DELETE_NOTE, 
        payload: id, 
    }
} 

const fetchNoteAction = () => {
    return {
        type: FETCH_NOTE,
    }
} 


// reducer 
