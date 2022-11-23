import React, { useContext } from "react";
import NotesList from "../NotesList";
import { Button, Layout } from "antd";
import { ActiveNoteContext } from "../../providers/ActiveNoteProvider";

const Sidebar = () => {
    const {setIsCreatingNote, setIsShowSingleNote, setIsUpdatingNote} = useContext(ActiveNoteContext)

    const addNewNote = () => {
        setIsCreatingNote(true)
        setIsShowSingleNote(false)
        setIsUpdatingNote(false)
    }

    return (
        <Layout.Sider theme="light" className="sidebar">
            <NotesList />
            <Button onClick={addNewNote}>Add Note</Button>
        </Layout.Sider>
    )
}

export default Sidebar;