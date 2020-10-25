import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { ListGroup } from "react-bootstrap";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, [todos]);

  const getTodos = async () => {
    const { data } = await axios.get("/todos");

    setTodos(data);
  };

  return (
    <div>
      <h1 className='text-center py-3' style={{ fontSize: "60px" }}>
        Todo-List
      </h1>
      <AddTodo />
      <ListGroup>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
