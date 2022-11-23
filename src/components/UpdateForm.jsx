import { useContext, useEffect, useState } from "react";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, Form, Input, Layout, Row } from "antd";
import { rules } from "../utils/rules";
import { ActiveNoteContext } from "../providers/ActiveNoteProvider";
import { NotesContext, updateNote, updateNoteFunc } from "../providers/NotesProvider";
import {SaveFilled} from '@ant-design/icons'



const UpdateForm = ({note}) => {
    const [name, setName] = useState(note.name);
    const [content, setContent] = useState(note.content);
    const [status, setStatus] = useState('');
    const {setNote} = useContext(NotesContext)
    const {isCreatingNote, setIsCreatingNote, setIsUpdatingNote, active, setActive} = useContext(ActiveNoteContext)

    const [form] = Form.useForm()
    useEffect(() => {
        form.setFieldsValue({name: note.name, content: note.content});
    }, [note])

    function updateNote(id, name, content) {
        updateNoteFunc(id, name, content)
        
    }

    const finishUpdate = () => {
        setNote(false)
        setIsUpdatingNote(false)
        setName('');
        setContent('');
    }
  
    return (
        <Layout>
            <h1>Update Form</h1>
      <Form onFieldsChange={() => updateNote(note.id, name, content)} onFinish={finishUpdate} form={form}>
            <Form.Item
                label="Название"
                name="name"
                rules={[rules.required()]}
            >
                <Input value={note.name} onChange={ev => setName(ev.target.value)} />
            </Form.Item>
            <Form.Item
                label="Описание"
                name="content"
                rules={[rules.required()]}
            >
                <SimpleMDE value={note.content} onChange={ev => setContent(ev)} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    <SaveFilled /> Close
                </Button>
            </Form.Item>
        </Form>
        </Layout>
    )
    
}

export default UpdateForm;