import React from "react";

import { Container } from "react-bootstrap";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className='py-5'>
      <Container>
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
