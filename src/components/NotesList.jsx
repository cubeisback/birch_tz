import { Button, List, Menu, Modal, Skeleton } from "antd";
import { useContext, useState } from "react";
import { ActiveNoteContext } from "../providers/ActiveNoteProvider";
import { NotesContext } from "../providers/NotesProvider";
import { DeleteFilled, EditFilled } from '@ant-design/icons';

const NotesList = () => {
  const {notes, note, setNote} = useContext(NotesContext)
  const {active, setActive, setIsShowSingleNote, setIsCreatingNote, setIsUpdatingNote} = useContext(ActiveNoteContext)
  
  const showNote = (note) => {
    setActive(note.id)
    setNote(note)
    setIsShowSingleNote(true)
    setIsCreatingNote(false)

    setIsUpdatingNote(false)
  }
  

      return (
        <List itemLayout="vertical">

        {notes?.map(note => 

          <List.Item
            key={note.id}
            className="list__item"
            onClick={() => showNote(note)}
            actions={[<EditFilled onClick={() => console.log('edit')} key="edit" />, <DeleteFilled onClick={() => console.log('delete')} key="delete" />]}
          >
            <div className="list__item_title">{note.name.substring(0, 20)}</div>
            <div className="list__item_description">{note.content.substring(0, 20)} {note.content.length >= 20 && '...' }</div>
          </List.Item>
        
        )}

        </List>
       );
}
  


export default NotesList;