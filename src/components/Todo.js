import axios from "axios";
import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";

const Todo = ({ todo }) => {
  const deleteLog = async () => {
    const res = await axios.delete(`/todos/${todo.id}`);
    console.log(res);
  };

  return (
    <ListGroup.Item>
      <Row>
        <Col md={4}>
          <h6 className={todo.urgent ? "text-danger" : "text-info"}>
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
