import { useLiveQuery } from "dexie-react-hooks";
import { createContext, useState } from "react";
import { db } from "../db/db";

export const NotesContext = createContext({notes: [], note: {}})

export const NotesProvider = ({children}) => {
    const [note, setNote] = useState({})
    const notes = useLiveQuery(
        async () => {
          const notes = await db.notes.toArray();
          return notes;
        },
        []
    );

    return <NotesContext.Provider value={{notes, note, setNote}}>
        {children}
    </NotesContext.Provider>
}

export const createNote = async ({name, content}) => {
    try {
        await db.notes.add({
          name,
          content
        });
      } catch (error) {
        console.log(error)
      }
}

export const updateNoteFunc = async (id, name, content) => { 
      try {
        await db.notes.update(id, {name: name, content: content})
      } catch (error) {
        console.log(error)
      }
}


export const deleteNote = async (id) => {
    await db.notes.delete(id);
}
