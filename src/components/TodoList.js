import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./Todo";
import { ListGroup } from "react-bootstrap";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const { data } = await axios.get("/todos");

    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <div>
      <h1 className='text-center py-3' style={{ fontSize: "60px" }}>
        Todo-List
      </h1>
      <ListGroup>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
