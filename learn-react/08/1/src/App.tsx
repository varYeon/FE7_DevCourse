import { createContext, useState } from "react";
import Page from "./components/Page";
import CountOusideDisplay from "./components/CountOusideDisplay";

type CounterContextType = {
  count: number;
  //setCount: React.Dispatch<React.SetStateAction<number>>; // 타입추론 이용
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};
export const CounterContext = createContext<CounterContextType>({
  count: 0,
  //setCount: () => {}, // 얘를 직접 넘기기보다 캡슐화하여 사용 : 얘를 활용한 함수를 만들어 넘기기
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});

export default function App() {
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  const [count, setCount] = useState(0);
  return (
    <>
      <CounterContext
        value={{
          count: count,
          increment: increment,
          decrement: decrement,
          reset: reset,
        }}
      >
        <Page />
      </CounterContext>
      <CountOusideDisplay />
    </>
  );
}
