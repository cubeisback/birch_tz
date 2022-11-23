import { useContext, useEffect, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, Col, Form, Input, Layout, Row } from "antd";
import { rules } from "../../utils/rules";
import { ActiveNoteContext } from "../../providers/ActiveNoteProvider";
import { NotesContext, updateNote } from "../../providers/NotesProvider";
import { SaveFilled } from '@ant-design/icons';


const UpdateForm = ({note}) => {
    const [name, setName] = useState(note.name);
    const [content, setContent] = useState(note.content);
    const {setNote} = useContext(NotesContext)
    const {setIsUpdatingNote} = useContext(ActiveNoteContext)

    const [form] = Form.useForm()
    useEffect(() => {
        form.setFieldsValue({name: note.name, content: note.content});
    }, [note, form])

    function updateNoteFunc(id, name, content) {
        updateNote(id, name, content)
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
            <Form onFieldsChange={() => updateNoteFunc(note.id, name, content)} onFinish={finishUpdate} form={form}>
                <Row justify="center">
                    <Col span={24}>
                        <Form.Item
                            label="Title"
                            name="name"
                            rules={[rules.required()]}
                            labelCol={{ span: 24}}
                        >
                            <Input value={note.name} onChange={e => setName(e.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                    <Form.Item
                        label="Description"
                        name="content"
                        rules={[rules.required()]}
                        labelCol={{ span: 24}}
                    >
                        <SimpleMDE value={note.content} onChange={e => setContent(e)} />
                    </Form.Item>
                    </Col>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            <SaveFilled /> Close
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        </Layout>
    )
    
}

export default UpdateForm;