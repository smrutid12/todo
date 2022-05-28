import React from "react";
import Card from "./UI/Card";
import "./css/TodoItem.css";
export const TodoItem = ({ todo, onDelete }) => {
  // const [dateformat,setDateFormat] = useState("");
  return (
    <>
      <Card className="expense-item">
        <div className="expense-item Date">{todo.date}</div>
        <div className="expense-item__description">
          <h2 className="expense-item__title text-capitalize ">{todo.title}</h2>
          <h6 className="expense-item__desc">{todo.desc}</h6>
        </div>
        <button className="btn Delete" onClick={() => onDelete(todo)}>
          Delete
        </button>
      </Card>
      {/* <hr /> */}
    </>
  );
};
