// initial state
// notes: []  

import { ADD_NOTE, DELETE_NOTE, FETCH_NOTE } from "./notesActionTypes"


// action 
// Add action
// Delete action
// fetch notes

export const addNoteAction = (note) => {
    return {
        type:ADD_NOTE, 
        payload: note, 
    }
} 

export const deleteNoteAction = (id) => {
    return {
        type: DELETE_NOTE, 
        payload: id, 
    }
} 

export const fetchNoteAction = () => {
    return {
        type: FETCH_NOTE,
    }
} 

