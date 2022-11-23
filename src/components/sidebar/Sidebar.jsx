import React, { useContext } from "react";
import NotesList from "./NotesList";
import { Button, Layout } from "antd";
import { ActiveNoteContext } from "../../providers/ActiveNoteProvider";
import {PlusCircleFilled} from '@ant-design/icons';
import { useNotes } from "../../hooks/useNotes";
import { NotesContext } from "../../providers/NotesProvider";

const Sidebar = ({query}) => {
    const {setIsCreatingNote, setIsShowSingleNote, setIsUpdatingNote} = useContext(ActiveNoteContext)
    const {notes} = useContext(NotesContext)
    const searchedNotes = useNotes(notes, query)
    const addNewNote = () => {
        setIsCreatingNote(true)
        setIsShowSingleNote(false)
        setIsUpdatingNote(false)
    }

    return (
        <Layout.Sider theme="light">
            <Button type="dashed" className="sidebar_btn" onClick={addNewNote}><PlusCircleFilled /> Add Note</Button>
            <NotesList searchedNotes={searchedNotes} />
        </Layout.Sider>
    )
}

export default Sidebar;