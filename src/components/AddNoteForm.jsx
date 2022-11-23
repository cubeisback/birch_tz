import { useContext, useState } from "react";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, Form, Input, Layout } from "antd";
import { rules } from "../utils/rules";
import { ActiveNoteContext } from "../providers/ActiveNoteProvider";
import { createNote } from "../providers/NotesProvider";



const AddNoteForm = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('');
    const {setIsCreatingNote} = useContext(ActiveNoteContext)
  
    function addNote(name, content) {
      createNote(name, content)
      setName('');
      setContent('');
      setIsCreatingNote(false)
    }
  
    return (
    <Layout>
      <p>{status}</p>
      <h1>Create Form</h1>

      <Form onFinish={addNote}>
            <Form.Item
                label="Name"
                name="name"
                rules={[rules.required()]}
            >
                <Input value={name} onChange={ev => setName(ev.target.value)} />
            </Form.Item>
            <Form.Item
                label="Description"
                name="content"
                rules={[rules.required()]}
            >
                <SimpleMDE value={content} onChange={ev => setContent(ev)} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Create
                </Button>
            </Form.Item>
        </Form>
    </Layout>
    )
}

export default AddNoteForm;