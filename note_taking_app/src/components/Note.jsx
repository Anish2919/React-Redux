import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNoteAction } from '../redux/action/notesAction';

const Note = ({note, dispatch}) => {
    const {id, title, content} = note;  

    const deleteNote = (note_id) => {
        // dispatch delete note
        dispatch(deleteNoteAction(note_id)); 
    }
    
  return (
      <div className="note_card border w-[60%] mx-auto text-center rounded-md mb-3">
        <h3 className=" text-lg font-semibold p-4 mb-3">{ title }</h3>
        <p className="px-7 text-left mb-3">{ content }</p>
        <button onClick={() => {deleteNote(id)}} className='mb-3 border px-7 bg-red-500 hover:bg-red-400 text-white uppercase'>Delete</button>
      </div>      
  );
}

export default Note;
