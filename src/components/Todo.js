import axios from "axios";
import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";

const Todo = ({ todo }) => {
  const deleteLog = async () => {
    await axios.delete(`/todos/${todo.id}`);
  };

  return (
    <ListGroup.Item size='sm'>
      <Row>
        <Col md={4}>
          <h6 className={todo.urgent === "true" ? "text-danger" : "text-info"}>
            {todo.message}
          </h6>
          TD #{todo.id}
          <span className='text-muted'> Created on: </span>
          {todo.date}
        </Col>
        <Col md={8}>
          <a
            href='#!'
            onClick={deleteLog}
            className='secondary-content'
            style={{ float: "right" }}
          >
            <i className='material-icons grey-text'>delete</i>
          </a>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default Todo;
