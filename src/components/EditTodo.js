import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";

const EditTodo = ({ match }) => {
  const [message, setMessage] = useState("");
  const [urgent, setUrgent] = useState("");

  const id = match.params.id;

  const getDetails = async (id) => {
    const { data } = await axios.get(`/todos/${id}`);
    setMessage(data.message);
    setUrgent(data.urgent);
  };

  useEffect(() => {
    getDetails(id);
  }, [id]);

  const getDate = () => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1; // January is 0
    const yyyy = today.getFullYear();
    return dd.toString() + "-" + mm.toString() + "-" + yyyy.toString();
  };

  const submitHandler = async () => {
    const data = {
      message,
      urgent,
      date: getDate(),
    };

    const config = {
      "Content-Type": "application/json",
    };

    await axios.put(`/todos/${id}`, data, config);
    setMessage("");
    setUrgent("");
  };

  return (
    <Container>
      <h1 className='text-center py-3' style={{ fontSize: "60px" }}>
        Edit Todo
      </h1>
      <Form.Group controlId='message'>
        <Form.Label>Enter message</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Todo'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Form.Text className='text-muted'>Update the Todo task.</Form.Text>
      </Form.Group>

      <Form.Group controlId='urgency'>
        <Form.Label>Urgent?</Form.Label>
        <Form.Control
          as='select'
          value={urgent}
          onChange={(e) => setUrgent(e.target.value)}
        >
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </Form.Control>
      </Form.Group>
      <div className='text-center'>
        <Link to='/'>
          <Button
            variant='primary'
            type='submit'
            size='lg'
            onClick={submitHandler}
          >
            Update
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default EditTodo;
