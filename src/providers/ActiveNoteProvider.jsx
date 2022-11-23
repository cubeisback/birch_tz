import { createContext, useState } from "react";

export const ActiveNoteContext = createContext({
    active: 0, 
    isCreatingNote: false, 
    isShowSingleNote: false, 
    isUpdatingNote: false
})

export const ActiveNoteProvider = ({children}) => {
    const [active, setActive] = useState(0)
    const [isShowSingleNote, setIsShowSingleNote] = useState(false)
    const [isUpdatingNote, setIsUpdatingNote] = useState(false)
    const [isCreatingNote, setIsCreatingNote] = useState(false)

    return <ActiveNoteContext.Provider value={{active, setActive, isCreatingNote, setIsCreatingNote, isShowSingleNote, setIsShowSingleNote, isUpdatingNote, setIsUpdatingNote}}>
        {children}
    </ActiveNoteContext.Provider>
}
