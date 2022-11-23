import { useMemo } from "react";

export const useNotes = (notes, query) => {
    const filteredNotes = [...notes]
    const searchedNotes = useMemo(() => {
        return filteredNotes.filter(note => note.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    }, [query, filteredNotes])

    return searchedNotes;
}