import Notescontext from "./NotesContext";
import { useState } from "react";

const NoteState = (props) => {
    // const s1 = {
    //     "name": "JA",
    //     "class": "CSB"
    // }
    // const [state, Setstate] = useState(s1);
    
//   const    update  = () => {
//         setTimeout(() => {
//             Setstate({
//                 "name": "JA2",
//                 "class": "CSB1"
//             })
//         }, 1000);
    // }
    const demonotes = [
         {
          "_id": "620a35b0b054958e375a96ab",
          "user": "620a3522b054958e375a96a9",
          "title": "merenotes4",
          "description": "meridesription4",
          "tag": "gndec",
          "date": "2022-02-14T10:53:45.142Z",
          "__v": 0
        }
     ]
     const[notes, setNotes] = useState(demonotes);
       
      
return (
    <Notescontext.Provider value={{notes, setNotes}}>
        {props.children}
    </Notescontext.Provider>
)
}
export default NoteState;