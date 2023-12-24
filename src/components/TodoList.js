import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import logo from '../images/sleep.gif';
import logo1 from '../images/nothing.png';
import logo2 from '../images/booked.png';
import logo3 from '../images/cat.gif';
import logo4 from '../images/whattodo.png';
import logo5 from '../images/color.gif';
import '../App.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState({
    text: "Today's list :)"
  });
  const [state1, setState1] = useState({
    text: logo
  });
  const [state2, setState2] = useState({
    text: logo1
  });

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    var result = newTodos.length;
    if (result >= 2) {
      setState2({
        text: logo2
      });
      setState1({
        text: logo5
      });
    } else if (result >= 1) {
      setState2({
        text: logo4
      });
      setState1({
        text: logo3
      });
    }
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
    var result = removeArr.length;
    if (result >= 2) {
      setState2({
        text: logo2
      });
      setState1({
        text: logo5
      });
    } else if (result >= 1) {
      setState2({
        text: logo4
      });
      setState1({
        text: logo3
      });
    } else {
      setState2({
        text: logo1
      });
      setState1({
        text: logo
      });
    }
  };

  const updatedTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <img className="image1" src={state1.text} />
      <img className="image2" src={state2.text} />
      <h1>{state.text}</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updatedTodo} />
    </div>
  );
}

export default TodoList;
