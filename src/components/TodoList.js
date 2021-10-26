import React from 'react'
import "./ToDoList.css";

function TodoList(props) {
    return (
        <div >
              <li>{props.item}</li>
        </div>
    )
}

export default TodoList
