// 실무적
// 1. ***Provider() 로 명명
// 2. children 사용
// 3. <CounterContext>

import { CounterContext } from "./counterContext";
import { useState } from "react";

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <CounterContext
        value={{
          count,
          increment,
          decrement,
          reset,
        }}
      >
        {children}
      </CounterContext>
    </>
  );
}
