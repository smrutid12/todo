import React from "react";
import { Container } from "react-bootstrap";
import { TodoItem } from "./TodoItem";
import "./css/Todos.css";
const Todos = (props) => {
  return (
    <Container>
      <div className="list">
        <h3 className="text-center list__heading my-3">Todo List</h3>
        {props.todos.length === 0 ? (
          <div className="notodo text-center">"No todos to display"</div>
        ) : (
          props.todos.map((todo) => {
            return <TodoItem todo={todo} onDelete={props.onDelete} />;
          })
        )}
      </div>
    </Container>
  );
};

export default Todos;
