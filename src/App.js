import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          {/* <div className="col-4 bg-danger">hello</div>
        <div className="col-4 bg-warning">hello</div>
        <div className="col-4 bg-primary">hello</div> */}
          <TodoInput />
          <TodoList />
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
