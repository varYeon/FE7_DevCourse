// import { useState } from "react";
import { useState } from "react";
import Count from "./components/Count";
import CountOutSide from "./components/CountOutSide";

// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count - 1)}>감소</button>
//       <button onClick={() => setCount(0)}>리샛</button>
//       <button onClick={() => setCount(count + 1)}>증가</button>
//     </>
//   );
// }

// 상태 끌어올리기(State Lifting) (고급 상태관리 패턴)
// 여러 컴포넌트가 같은 상태를 공유해야 할 때,
// 그 상태를
export default function App() {
  const [count, setCount] = useState(0);
  // 여기서 모든 상태의 함수들을 정의하고
  // 자식 컴포넌트로 전달
  const increment = () => {
    setCount((count) => count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <>
      <Count
        count={count}
        increment={increment}
        reset={reset}
        decrement={decrement}
      />
      <CountOutSide count={count} />
    </>
  );
}
