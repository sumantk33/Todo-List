import React from "react";
import axios from "axios";
import { ListGroup, Row, Col } from "react-bootstrap";

const Todo = ({ todo: { message, urgent, id, date }, setFetchAgain }) => {
  const deleteLog = async () => {
    await axios.delete(`/todos/${id}`);
    setFetchAgain(true);
  };

  return (
    <div>
      <ListGroup.Item size='sm'>
        <Row>
          <Col md={10}>
            <h6 className={urgent === "true" ? "text-danger" : "text-info"}>
              {message}
            </h6>
            TD #{id}
            <span className='text-muted'> Created on: </span>
            {date}
          </Col>
          <Col md={2}>
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
    </div>
  );
};

export default Todo;
