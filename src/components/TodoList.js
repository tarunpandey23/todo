import React from 'react'
import "./ToDoList.css";

function TodoList(props) {
    return (
        <div className="todoListDiv" >
              <li>{props.item}</li>
        </div>
    )
}

export default TodoList
