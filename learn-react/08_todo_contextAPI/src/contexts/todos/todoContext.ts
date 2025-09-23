import { createContext } from "react";

type TodoContext = {
  todos: Todo[];
};

type TodoActionContext = {
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
};

export const TodoContext = createContext<TodoContext | null>(null);
export const TodoActionContext = createContext<TodoActionContext | null>(null);
