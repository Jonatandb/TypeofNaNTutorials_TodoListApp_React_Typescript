type Todo = {
    text: string,
    complete: boolean,
  }

type ToggleTodo = (selectedTodo) => void;

type AddToDo = (newTodo: string) => void;