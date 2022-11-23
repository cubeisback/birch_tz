import { Layout } from "antd";
import React, { useContext } from "react";
import { ActiveNoteContext } from "../../providers/ActiveNoteProvider";
import { NotesContext } from "../../providers/NotesProvider";
import AddNoteForm from "./AddNoteForm";
import UpdateForm from "./UpdateForm";
import NoteList from "./NoteList";
import { useNotes } from "../../hooks/useNotes";
import NoteComponent from "./NoteComponent";

const Workspace = ({query}) => {
    const {isCreatingNote, isShowSingleNote, isUpdatingNote} = useContext(ActiveNoteContext)
    const {notes, note} = useContext(NotesContext)
    const searchedNotes = useNotes(notes, query)

    return (
        <Layout.Content className="content__block">
            {isUpdatingNote && <UpdateForm note={note} />}
            {isCreatingNote && <AddNoteForm />}
            {isShowSingleNote && <NoteComponent note={note} />}
            {!isShowSingleNote && !isCreatingNote && !isUpdatingNote && <NoteList searchedNotes={searchedNotes} />}
        </Layout.Content>
    )
}

export default Workspace;