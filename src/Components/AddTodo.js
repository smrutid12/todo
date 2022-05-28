import React, { useState } from 'react'
import { Container,Form,Button } from 'react-bootstrap'
import "./css/AddTodo.css"
const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [desc, setDesc] = useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !date || !desc){
            alert("Field cannot be blank");
        }
        else{
            addTodo(title,date,desc);
            setTitle("");
            setDate("");
            setDesc("");
        }
    }
  return (
    <Container className="add">
        <h3 className='text-center'>Add a Task</h3>
        <Form onSubmit={submit}>
            <div className="todocontrols p-3 justify-content-center">
                <div className="control">
                    <label HtmlFor="title" className="form-label text-center">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="inputfield form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="control">
                    <label HtmlFor="date" className="form-label text-center">Date</label>
                    <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="inputfield form-control" id="date"/>
                </div>
            </div>
            <div className="mb-3 mx-5">
                <label HtmlFor="desc" className="form-label"><b>Todo Description</b></label>
                <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="inputfield form-control" id="desc"/>
            </div>
            <Button type="submit" className="btn addbtn">Add Todo</Button>
        </Form>
    </Container>
  )
}

export default AddTodo
