import ToDoForm from "./components/ToDoForm";
import "./App.css"
import logo from "./download.jfif";


function App() {
  return (
    <div className="appBody">
      {/* <h1>toDo</h1> */}
      <img src={logo} alt="logo"/>
      <div className="insideAppBody">
        <h3> create your tasks here</h3>
      <ToDoForm/>
      </div>
      
    </div>
  );
}

export default App;
