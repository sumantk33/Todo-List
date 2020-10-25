import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";

const Todo = ({ todo }) => {
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
          <a href='#!' className='secondary-content' style={{ float: "right" }}>
            <i className='material-icons grey-text'>delete</i>
          </a>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default Todo;
