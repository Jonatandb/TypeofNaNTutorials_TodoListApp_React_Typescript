// Creating a Todo List App in React using Typescript (Part 1)
//    https://www.youtube.com/watch?v=ODvirqIC09A

import React, { useState } from 'react';
import { ToDoList } from './ToDoList';
import { AddToDoForm } from './AddToDoForm';

const initialTodos: Array<Todo> = [
  { text: "Estudiar TypeScript", complete: true },
  { text: "Dormir", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addToDo: AddToDo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }])
  }

  return (
    <>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <AddToDoForm addToDo={addToDo} />
    </>
  );
}

export default App;
