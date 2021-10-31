import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [ispending, setIspending] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) =>{
      e.preventDefault();
      const blog = {title,body,author};
      setIspending(true)
      fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(blog)
      }).then(() =>{
        setIspending(false);
        history.push('/');
      })
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            required
            value={title}
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Author's Name"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </Form.Group>
        {!ispending&&<Button type='submit' variant="info">Add Blog</Button>}
        {ispending&&<div>loading...</div>}
      </Form>
    </div>
  );
};

export default Create;
