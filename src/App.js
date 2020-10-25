import React from "react";

import { Container } from "react-bootstrap";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className='py-5'>
      <Container>
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
