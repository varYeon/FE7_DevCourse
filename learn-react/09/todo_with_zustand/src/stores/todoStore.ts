import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// use***
type TodoStore = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
};

export const useTodoStore = create<TodoStore>()(
  persist(
    immer((set) => ({
      todos: [],
      addTodo: (text: string) =>
        set((state) => {
          const uuid = (
            Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
          ).toUpperCase();
          state.todos = [
            ...state.todos,
            {
              id: uuid,
              text,
              completed: false,
            },
          ];
        }),
      toggleTodo: (id: string) =>
        set((state) => {
          state.todos = state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          );
        }),
      deleteTodo: (id: string) =>
        set((state) => {
          state.todos = state.todos.filter((todo) => todo.id !== id);
        }),
      updateTodo: (id: string, text: string) =>
        set((state) => {
          state.todos = state.todos.map((todo) =>
            todo.id === id ? { ...todo, text: text } : todo
          );
        }),
    })),
    {
      name: "todo-store",
    }
  )
);
