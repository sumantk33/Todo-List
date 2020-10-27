import React, { useState } from "react";
import axios from "axios";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const AddTodo = ({ setFetchAgain }) => {
  const [message, setMessage] = useState("");
  const [urgent, setUrgent] = useState("");

  const getDate = () => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1; // January is 0
    const yyyy = today.getFullYear();
    return dd.toString() + "-" + mm.toString() + "-" + yyyy.toString();
  };

  const addHandler = async () => {
    if (urgent === "") {
      alert("Urgency not selected");
    } else if (message === "") {
      alert("Please enter a message");
    } else {
      const config = {
        "Content-Type": "application/json",
      };

      const data = {
        message,
        urgent,
        date: getDate(),
      };

      await axios.post("/todos", data, config);

      setMessage("");
      setUrgent("");

      setFetchAgain(true);
    }
  };

  return (
    <InputGroup>
      <FormControl
        placeholder='Enter Todo'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <select
        name='todo'
        value={urgent}
        onChange={(e) => setUrgent(e.target.value)}
      >
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
