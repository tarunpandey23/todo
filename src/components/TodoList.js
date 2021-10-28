import React from "react";
import "./ToDoList.css";
import { MdDone } from "react-icons/md";

function TodoList(props) {
  return (
    <div className="todoListDiv">
      <div>
        <li>
          {props.item}
          {/* <div className="iconContainer">
          <div className="delIcon" onClick={deleteTodo}>
            
            <AiOutlineClose />
          </div>
        
        </div> */}
        </li>
      </div>
      <div className="iconContainer">
        <div
          className="delIcon"
          onClick={() => {
            props.select(props.id);
          }}
        >
          <MdDone />
        </div>
      </div>
    </div>
  );
}

export default TodoList;
