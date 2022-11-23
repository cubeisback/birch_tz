import { Button, Card, Col, Layout, Modal, Row } from "antd";
import React, {useContext, useState} from "react";
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { deleteNote, NotesContext } from "../providers/NotesProvider";
import { ActiveNoteContext } from "../providers/ActiveNoteProvider";

const NoteList = ({searchedNotes}) => {
    const {notes, note, setNote} = useContext(NotesContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {isCreatingNote, setIsCreatingNote, setIsUpdatingNote, setIsShowSingleNote, setActive} = useContext(ActiveNoteContext)
    
    

  const showModal = (note) => {
    setNote(note)
    setIsModalOpen(true);
  };
  

    const handleCancel = () => {
        setIsModalOpen(false);
    }
    
    const deleteItem = () => {
        deleteNote(note.id)
        setIsModalOpen(false);
    }

    const showEdit = (note) => {
        setActive(note.id)
        setNote(note)
        setIsUpdatingNote(true)
      }
      
      const showNote = (note) => {
        setActive(note.id)
        setNote(note)
        setIsShowSingleNote(true)
        setIsCreatingNote(false)
      }
    
    if(!searchedNotes.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Notes not found</h1>
        )
    }

    return (
        <Layout>
            <h1>Notes List</h1>
        <Row gutter={[16, 16]}>
        {searchedNotes?.map(note => 
        <Col span={6} key={note.id}>
            <Card
                actions={[
                    <DeleteFilled onClick={() => showModal(note)} key="delete" />,
                    <EditFilled onClick={() => showEdit(note)} key="edit"/>
                ]}
            >
                <Card.Meta
                    title={note.name}
                    description={note.content}
                    onClick={() => showNote(note)}
                />
            </Card>
            <Modal 
              title="Delete note" 
              open={isModalOpen} 
              onCancel={handleCancel}
              footer={[
                <Button key="back" onClick={handleCancel}>
                  No
                </Button>,
                <Button key="submit" type="primary" onClick={() => deleteItem(note.id)}>
                  Yes
                </Button>
              ]}
            >
              <p>Are you sure you want to delete the note?</p>
            </Modal>
            </Col>
        )}
        </Row>
        </Layout>
    );
};

export default NoteList;