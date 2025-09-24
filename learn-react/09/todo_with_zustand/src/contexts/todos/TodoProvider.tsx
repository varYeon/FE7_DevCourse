import { useMemo, useState } from "react";
import { TodoActionContext, TodoContext } from "./todoContext";

export default function TodoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    const uuid = (
      Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
    ).toUpperCase();
    setTodos((todos) => [
      ...todos,
      {
        id: uuid,
        text,
        completed: false,
      },
    ]);
  };
  const toggleTodo = (id: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const updateTodo = (id: string, text: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo))
    );
  };
  const deleteTodo = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  // const [상태변수, 디스패치(액션발생함수, 리듀서발생함수)] = useReducer(reducer, 0)
  const memoiaztion = useMemo(
    () => ({
      addTodo,
      toggleTodo,
      updateTodo,
      deleteTodo,
    }),
    []
  );
  return (
    <>
      <TodoActionContext value={memoiaztion}>
        <TodoContext value={{ todos }}>{children}</TodoContext>
      </TodoActionContext>
    </>
  );
}
