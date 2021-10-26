

import ToDoForm from "./components/ToDoForm";
import "./App.css"
function App() {
  return (
    <div className="appBody">
      <h1>toDo</h1>
      <div className="insideAppBody">
        <h3> create your tasks here</h3>
      <ToDoForm/>
      </div>
      
    </div>
  );
}

export default App;
