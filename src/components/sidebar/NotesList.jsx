import { Button, List, Modal } from "antd";
import { useContext, useState } from "react";
import { ActiveNoteContext } from "../../providers/ActiveNoteProvider";
import { deleteNote, NotesContext } from "../../providers/NotesProvider";
import { DeleteFilled, EditFilled } from '@ant-design/icons';

const NotesList = ({searchedNotes}) => {
  const {note, setNote} = useContext(NotesContext)
  const {setActive, setIsShowSingleNote, setIsCreatingNote, setIsUpdatingNote} = useContext(ActiveNoteContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showNote = (note) => {
    setActive(note.id)
    setNote(note)
    setIsShowSingleNote(true)
    setIsCreatingNote(false)
    setIsUpdatingNote(false)
  }

  const showModal = (note) => {
    setNote(note)
    setIsModalOpen(true);
  };

  const deleteItem = () => {
    deleteNote(note.id)
    setIsModalOpen(false);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const showEdit = (note) => {
    setActive(note.id)
    setNote(note)
    setIsShowSingleNote(false)
    setIsUpdatingNote(true)
  }

  return (
    <List itemLayout="vertical">
      {searchedNotes?.map(note => 
        <List.Item
          key={note.id}
          className="list__item"
          actions={[<EditFilled onClick={() => showEdit(note)} key="edit" />, <DeleteFilled onClick={() => showModal(note)} key="delete" />]}
        >
          <div onClick={() => showNote(note)} className="list__item_title">{note.name.substring(0, 20)}</div>
          <div onClick={() => showNote(note)} className="list__item_description">{note.content.substring(0, 20)} {note.content.length >= 20 && '...' }</div>
          <Modal 
                title="Delete note" 
                open={isModalOpen} 
                onCancel={handleCancel}
                footer={[
                  <Button key="back" onClick={handleCancel}>No</Button>,
                  <Button key="submit" type="primary" onClick={() => deleteItem(note.id)}>Yes</Button>
                ]}
              >
                <p>Are you sure you want to delete the note?</p>
              </Modal>
        </List.Item>
      )}
    </List>
  );
}

export default NotesList;