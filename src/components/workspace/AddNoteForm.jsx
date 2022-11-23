import { useContext, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, Col, Form, Input, Layout, Row } from "antd";
import { rules } from "../../utils/rules";
import { ActiveNoteContext } from "../../providers/ActiveNoteProvider";
import { createNote } from "../../providers/NotesProvider";
import { CloseCircleFilled, FileAddFilled } from '@ant-design/icons';

const AddNoteForm = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const {setIsShowSingleNote, setIsCreatingNote, setIsUpdatingNote} = useContext(ActiveNoteContext)
  
    function addNote(name, content) {
        createNote(name, content)
        setName('');
        setContent('');
        setIsCreatingNote(false)
    }
    const getBack = () => {
        setIsCreatingNote(false)
        setIsShowSingleNote(false)
        setIsUpdatingNote(false)
    }
  
    return (
    <Layout>
      <h1>Create Form</h1>
      <Form onFinish={addNote}>
        <Row justify="center">
            <Col span={24}>
            <Form.Item
                label="Name"
                name="name"
                rules={[rules.required()]}
                labelCol={{ span: 24}}
            >
                <Input value={name} onChange={ev => setName(ev.target.value)} />
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item
                label="Description"
                name="content"
                rules={[rules.required()]}
                labelCol={{ span: 24}}
            >
                <SimpleMDE value={content} onChange={ev => setContent(ev)} />
            </Form.Item>
            </Col>
            <Form.Item>
                <Button type="default" htmlType="submit" className="btn_margin">
                    <FileAddFilled /> Create
                </Button>
                <Button type="default" className="btn_margin" onClick={getBack}><CloseCircleFilled /> Close</Button>
            </Form.Item>
        </Row>
        </Form>
    </Layout>
    )
}

export default AddNoteForm;