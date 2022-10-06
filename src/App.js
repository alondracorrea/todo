import React,{useState} from 'react'
import TodoList from "./components/TodoList";
import './App.css';



function App() {
 // const [state1, setState1] = useState({
  //  text:"test"
  //});
  //<img className="image1" src={logo} />
  return (
    <div className='todo-app'>
     
    <TodoList />
    </div>
  );
}

export default App;
