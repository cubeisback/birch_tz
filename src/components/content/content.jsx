import { Button, Card, Col, Layout, Modal, Row } from "antd";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { ActiveNoteContext } from "../../providers/ActiveNoteProvider";
import { deleteNote, NotesContext } from "../../providers/NotesProvider";
import AddNoteForm from "../AddNoteForm";
import NotesList from "../NotesList";
import UpdateForm from "../UpdateForm";
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import NoteList from "../NoteList";
import { useNotes } from "../../hooks/useNotes";

const Content = ({query, setQuery}) => {
    const {isCreatingNote, setActive, isShowSingleNote, isUpdatingNote} = useContext(ActiveNoteContext)
    const {notes, note, setNote} = useContext(NotesContext)
    

    let filteredNotes = []
    notes ? filteredNotes = notes : filteredNotes = []
      const searchedNotes = useMemo(() => {
          return filteredNotes.filter(note => note.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
      }, [query, filteredNotes])
  
        console.log('res', searchedNotes)
        

    return (
        <Layout.Content>
            {isUpdatingNote && <UpdateForm note={note} />}
            {isCreatingNote && <AddNoteForm />}
            {isShowSingleNote && <div>One element</div>}
            {!isShowSingleNote && !isCreatingNote && !isUpdatingNote && <NoteList searchedNotes={searchedNotes} />}
        </Layout.Content>
    )
}

export default Content;