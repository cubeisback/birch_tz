import { Button, Layout } from "antd";
import { useContext, useEffect, useState } from "react";
import { ActiveNoteContext } from "../providers/ActiveNoteProvider";
import { BackwardFilled } from '@ant-design/icons';


const NoteComponent = ({note}) => {
    const {setIsShowSingleNote} = useContext(ActiveNoteContext)
    const getBack = () => {
        setIsShowSingleNote(false)
    }

    return (
        <Layout>
            <Button onClick={getBack}> <BackwardFilled /> Back</Button>
            <h1>{note.name}</h1>
            {note.content}
        </Layout>
    )
    
}

export default NoteComponent;