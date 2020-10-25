import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { ListGroup } from "react-bootstrap";

const TodoList = (props) => {
  const [todos, setTodos] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);

  const getTodos = async () => {
    const { data } = await axios.get("/todos");
    setTodos(data);
  };

  useEffect(() => {
    getTodos();
    setFetchAgain(false);
  }, [fetchAgain]);

  return (
    <div>
      <h1 className='text-center py-3' style={{ fontSize: "60px" }}>
        Todo-List
      </h1>
      <AddTodo setFetchAgain={setFetchAgain} />
      {todos.length === 0 ? (
        <h3 className='text-center'>No todos.....</h3>
      ) : (
        <ListGroup>
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} setFetchAgain={setFetchAgain} />
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default TodoList;
