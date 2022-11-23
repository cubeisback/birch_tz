import React, { useContext } from "react";
import NotesList from "../NotesList";
import { Button, Layout } from "antd";
import { ActiveNoteContext } from "../../providers/ActiveNoteProvider";
import {PlusCircleFilled} from '@ant-design/icons';

const Sidebar = () => {
    const {setIsCreatingNote, setIsShowSingleNote, setIsUpdatingNote} = useContext(ActiveNoteContext)

    const addNewNote = () => {
        setIsCreatingNote(true)
        setIsShowSingleNote(false)
        setIsUpdatingNote(false)
    }

    return (
        <Layout.Sider theme="light">
            <Button type="dashed" className="sidebar_btn" onClick={addNewNote}><PlusCircleFilled /> Add Note</Button>

            <NotesList />
            
        </Layout.Sider>
    )
}

export default Sidebar;