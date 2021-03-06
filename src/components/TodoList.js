import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { ListGroup } from "react-bootstrap";
import Spinner from "../layout/Spinner";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const [loading, setLoading] = useState(false);

  const getTodos = async () => {
    setLoading(true);
    const { data } = await axios.get("/todos");
    setTodos(data);
    setLoading(false);
  };

  useEffect(() => {
    getTodos();
    setFetchAgain(false);
  }, [fetchAgain]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <h1 className='text-center py-3' style={{ fontSize: "60px" }}>
          Todo-List
        </h1>
        <AddTodo setFetchAgain={setFetchAgain} />
        <br />
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
  }
};

export default TodoList;
