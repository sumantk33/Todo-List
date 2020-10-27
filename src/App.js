import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";

const App = () => {
  return (
    <Router>
      <div className='py-5'>
        <Container>
          <Route exact path='/' component={TodoList} />
          <Route path='/todos/:id' component={EditTodo} />
        </Container>
      </div>
    </Router>
  );
};

export default App;
