import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Form,
  FormGroup,
  FormControl,
  Modal,
  Row,
  Col,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const AddTodo = () => {
  const [message, setMessage] = useState("");
  const [urgent, setUrgent] = useState("");
  const [date, setDate] = useState("");

  const getDate = () => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    return dd.toString() + "-" + mm.toString() + "-" + yyyy.toString();
  };

  const addHandler = async () => {
    if (urgent === "") {
      alert("Urgency not selected");
    } else {
      const urgentData = urgent === "true" ? true : false;

      setUrgent(urgentData);

      const config = {
        "Content-Type": "application/json",
      };

      const data = {
        message,
        urgent,
        date: getDate(),
      };

      const res = await axios.post("/todos", data, config);

      console.log(res);
    }
  };

  return (
    <InputGroup className='mb-3'>
      <FormControl
        placeholder='Enter Todo'
        aria-label="Recipient's username"
        aria-describedby='basic-addon2'
        onChange={(e) => setMessage(e.target.value)}
      />
      <select name='todo' onChange={(e) => setUrgent(e.target.value)}>
        <option value=''>Urgent?</option>
        <option value='true'>Yes</option>
        <option value='false'>No</option>
      </select>

      <InputGroup.Append>
        <Button variant='primary' onClick={addHandler}>
          Add
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default AddTodo;
