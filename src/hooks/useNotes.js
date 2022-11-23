import { useMemo } from "react";

export const useNotes = (notes, query) => {
    let filteredNotes = []
    notes ? filteredNotes = notes : filteredNotes = []
    const searchedNotes = useMemo(() => {
        return filteredNotes.filter(note => note.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    }, [query, filteredNotes])

    return searchedNotes;
}