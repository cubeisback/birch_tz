import { Button, Modal } from "antd";
import { useContext, useState } from "react";
import { ActiveNoteContext } from "../providers/ActiveNoteProvider";
import { NotesContext } from "../providers/NotesProvider";

const NotesList = () => {
  const {notes, note, setNote} = useContext(NotesContext)
  const {active, setActive, setIsShowSingleNote, setIsCreatingNote} = useContext(ActiveNoteContext)
  
  const showNote = (note) => {
    setActive(note.id)
    setNote(note)
    setIsShowSingleNote(true)
    setIsCreatingNote(false)
  }
  
    
      return <ul>
        {notes?.map(note => 
        <li key={note.id}>
          <p onClick={() => showNote(note)}>{note.name}, {note.content}</p>
        </li>
        )}
      </ul>;
}
  


export default NotesList;