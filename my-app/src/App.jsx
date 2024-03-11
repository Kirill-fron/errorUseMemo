import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from './store/todoSlice'
import TodoList from "./components/TodoList";
import InputFreid from "./components/InputFreid";
import "./index.css";


const App = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();


  const addTask = () => dispatch(addTodo(text))

  const toggleTodoComlete = (todoId) => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id !== todoId) return todo;
    //     return {
    //       ...todo,
    //       completed: !todo.completed,
    //     };
    //   })
    // );
  };

  const removeTodo = (todoId) => {
    // setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <InputFreid text={text} handleInput={setText}
       handleSubmit={addTask} />
      <TodoList />
    </div>
  );
};

export default App;
