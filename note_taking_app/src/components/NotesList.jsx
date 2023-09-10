import React from 'react';

const NotesList = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl text-center py-2 mb-2'>Notes List</h1>
      {/* Note */} 
      <div className="note_card border w-[60%] mx-auto text-center rounded-md mb-3">
        <h3 className=" text-lg font-semibold p-4 mb-3">Title</h3>
        <p className="px-7 text-left mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed tempore saepe necessitatibus aut veniam maiores ut iste nisi similique et consequuntur incidunt vero harum excepturi beatae eum architecto obcaecati dolor, adipisci magnam soluta ipsa! Tenetur assumenda delectus amet quaerat accusamus explicabo consequatur atque.</p>
        <button className='mb-3 border px-7 bg-red-500 hover:bg-red-400 text-white uppercase'>Delete</button>
      </div>
    </div>
  );
}

export default NotesList;
