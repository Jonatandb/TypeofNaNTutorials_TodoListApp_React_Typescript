// Creating a Todo List App in React using Typescript (Part 1)
//    https://www.youtube.com/watch?v=ODvirqIC09A

import React from 'react';
import { ToDoListItem } from './ToDoListItem';

const todos: Array<Todo> = [
  { text: "Estudiar TypeScript", complete: true },
  { text: "Dormir", complete: false },
];

const App: React.FC = () => {
  return (
    <>
      <ToDoListItem todo={todos[0]} />
      <ToDoListItem todo={todos[1]} />
    </>
  );
}

export default App;
