import React, { useEffect } from 'react'; 
import {useSelector, useDispatch} from 'react-redux'; 
import { fetchNoteAction } from '../redux/action/notesAction';
import Note from './Note';

const NotesList = () => { 
  // initalize dispatch 
  const dispatch = useDispatch(); 

  useEffect(() => {
    // fetch data 
    dispatch(fetchNoteAction()); 
  }, []);  

  // get notes 
  const notes = useSelector((storeData) => {
    return storeData.notes; 
  });  
  return (
    <>
      <h1 className='font-bold text-2xl text-center py-2 mb-2'>Notes List</h1>
      {/* Note */} 
      {notes.map(note => (
        <Note key={note.id} note={note} dispatch={dispatch} /> 
      ))}
    </>
  );
}

export default NotesList;
