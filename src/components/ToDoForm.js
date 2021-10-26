import React,{useState}from 'react'
import "./ToDoForm.css"
import TodoList from './TodoList';

export default function ToDoForm() {
    const [todo,setTodo ] = useState("");
    const[todoList,setTodoList]=useState([]);
    const onChangeHandler=(event)=>{
        setTodo(event.target.value);
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        setTodoList((todolist)=>{
            return [...todolist,todo];
        });
        setTodo("");
        

    }
    return (
        <div >
            
            <form className="formBody"  onSubmit={submitHandler}>
                <input type="text"  placeholder="what's your plan for today" value={todo} onChange={onChangeHandler} />
                <button className="subBtn">add todo</button>
                
            </form>
            <div className="todoList">
                <ul>
                    
                       { todoList.map((currentItem)=>{
                        //    return <li>{currentItem}</li>
                        return <TodoList item={currentItem}/>

                       }) }
                    
                </ul>
            </div>
        </div>
    )
}
