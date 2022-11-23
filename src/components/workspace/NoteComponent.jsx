import { Button, Layout, Row } from "antd";
import { useContext } from "react";
import { ActiveNoteContext } from "../../providers/ActiveNoteProvider";
import { EditFilled, BackwardFilled } from '@ant-design/icons';
import { NotesContext } from "../../providers/NotesProvider";
import ReactMarkdown from "react-markdown";

const NoteComponent = ({note}) => {
    const {setActive, setIsShowSingleNote, setIsUpdatingNote} = useContext(ActiveNoteContext)
    const {setNote} = useContext(NotesContext)
    const getBack = () => {
        setIsShowSingleNote(false)
    }
    const showEdit = (note) => {
        setActive(note.id)
        setNote(note)
        setIsShowSingleNote(false)
        setIsUpdatingNote(true)
    }

    return (
        <Layout>
            <Row>
                <Button onClick={getBack}> <BackwardFilled /> Back</Button>
                <Button onClick={() => showEdit(note)} className="content__edit_btn"><EditFilled/> Edit</Button>
            </Row>
            
            <h1 className="content__title">{note.name}</h1>
            <ReactMarkdown>{note.content}</ReactMarkdown>
        </Layout>
    )
    
}

export default NoteComponent;