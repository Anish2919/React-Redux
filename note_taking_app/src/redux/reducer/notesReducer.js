import { ADD_NOTE, DELETE_NOTE, FETCH_NOTE } from "../action/notesActionTypes"

// determine initial state 
const initialState = {
    notes: [], 
}

let id; 

function checkId() {
    const notes = JSON.parse(localStorage.getItem('notes')); 
    if(notes) {
        let _id = notes[notes.length - 1].id; 
        (_id) ? id = _id + 1 : id = 0; 
        
    } else {
        id = 0; 
    }    
}

checkId(); 
// check localstorage 

export const notesReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_NOTE: 

            const newNote = {
                id: id++, 
                title: action.payload.title, 
                content: action.payload.content, 
            }
            // add the updated new notes in the localStorage 
            const updatedNotes = [...state.notes, newNote]; 
            localStorage.setItem('notes', JSON.stringify(updatedNotes)); 
            return {
                notes: [...state.notes, newNote]
            }
        case FETCH_NOTE: 
            const notes = localStorage.getItem('notes'); 
            if(notes) {
                return {
                    notes: JSON.parse(notes)
                } 
            } 
            if(!notes) {localStorage.setItem('notes', '')}
         case DELETE_NOTE: 
            const filteredNotes = state.notes.filter(note => {
                return note.id !== action.payload; 
            });  
            localStorage.setItem('notes', JSON.stringify(filteredNotes)); 
            return {
                notes: filteredNotes, 
            }
        default: 
            return state; 
    }
}