// this will display notes after login
import React from 'react'
import Noteitem from './Noteitem'
import { useContext } from 'react';
import Notescontext from '../Context/Notes/NotesContext';

const Notes = () => {
    const context = useContext(Notescontext);
    const{notes, setNotes} = context;
  return (
    <div className='container my-3'>

      <h1>Your Notes</h1>
     { notes.map((note) => {
            return <Noteitem note ={note} />;
      })}

    </div>
  )
}

export default Notes
