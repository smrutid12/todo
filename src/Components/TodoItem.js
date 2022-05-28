import React from 'react'
import Card from './UI/Card'
import "./css/TodoItem.css"
export const TodoItem = ({todo, onDelete}) => {
  return (
    <>
    <Card className="expense-item">
      <div className="expense-item Date">{todo.date}</div>
      <div className="expense-item__description">
        <h2>{todo.title}</h2>
      </div>
      <div className="expense-item__price">{todo.desc}</div>
      <button onClick={()=>onDelete(todo)}>Delete</button>
    </Card>
    
    <hr/>
    </>
  )
}