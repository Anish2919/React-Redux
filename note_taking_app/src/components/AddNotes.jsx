import React from 'react';
import {useForm} from 'react-hook-form'; 

const AddNotes = () => {
    const {register, formState:{errors}, reset, handleSubmit } = useForm(); 

    const addNote = (data) => {
        console.log(data); 
        reset(); 
    }
  return (
    <div>
      <h3 className='text-center font-bold py-3'>Add Notes</h3>
      <form action="" onSubmit={handleSubmit(addNote)}>
        <div className="flex justify-center gap-6">
            <input className='border rounded-md block w-64 px-3' type="text" placeholder='Add Title' 
                {...register('title', {
                    required:'Input is required',
                })}/>
            <input className='border rounded-md block w-64 px-3' type="text" placeholder='Add Note' 
                {...register('note', {
                    required:true, 
                })}/>
            <button className='btn' type='submit'>Add</button>
        </div>
        <button type='button' className='border-2 block mx-auto mt-3 px-7 bg-red-500 text-white hover:bg-red-400'>Enroll in this course.</button>
      </form>
    </div>
  );
}

export default AddNotes;
