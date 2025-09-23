import { createContext, useState } from "react";
import Page from "./components/Page";

// 전역 상태 관리
// 1. Context API
// 2. Redux Toolkit
// 3. Zustand (주스탄드, 저스탠드, 져스탄드 ...)
// Mobx, recoil ...

// 1. Context API
// 드릴링 안하고 어디다가 보관(CounterContext객체)해놨다가 가져와서 쓰는 느낌?
// 1.1 컨텍스객체를 생성 -> createContext
// 1.2 컨텍스트의 범위를 지정해야 함 -> <컨텍스트객체>공급범위</컨텍스트객체>
// 1.3 데이터를 공급 -> 컨텍스트 객체에 value 속성을 사용
// 1.4 사용

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};
export const CounterContext = createContext<CounterContextType | null>(null);

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <CounterContext value={{ count, increment, decrement, reset }}>
        <Page
        // // props drilling 코드 - 이제 필요 없음 (전달 받는 부분도 다 지움)
        //   count={count}
        //   increment={increment}
        //   decrement={decrement}
        //   reset={reset}
        />
      </CounterContext>
    </>
  );
}
