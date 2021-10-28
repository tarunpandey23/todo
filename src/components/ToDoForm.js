import React, { useState } from "react";
import "./ToDoForm.css";
import TodoList from "./TodoList";

export default function ToDoForm() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onChangeHandler = (event) => {
    setTodo(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setTodoList((todolist) => {
      return [...todolist, todo];
    });
    setTodo("");
  };
  const deleteTodo = (id) => {
    console.log("deleted");
    setTodoList((todoList) => {
      return todoList.filter((currentElem, i) => {
        return i !== id;
      });
    });
  };
  return (
    <div>
      <form className="formBody" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="what's your plan for today"
          value={todo}
          onChange={onChangeHandler}
        />
        <button className="subBtn">add todo</button>
      </form>
      <div className="todoList">
        <ul>
          {todoList.map((currentItem, i) => {
            return (
              <TodoList item={currentItem} key={i} id={i} select={deleteTodo} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
