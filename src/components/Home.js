import React from 'react'
import Notes from './Notes';
// import { useContext } from 'react';
// import Notescontext from '../Context/Notes/NotesContext';
const Home = () => {
  // const context = useContext(Notescontext);
  // const{notes, setNotes} = context
  return (
    <div >
    <div className="container my-3">
         <h1>Add a Note</h1>
      <form>
  <div class="form-group my-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary my-3">Submit</button>
</form>
      
      </div>
      <Notes />
    </div>
 
  )
}

export default Home;
