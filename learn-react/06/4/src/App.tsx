// useEffect 훅
// 컴포넌트의 사이드 이펙트(side effect)를 처리하기 위한 훅

import { useEffect, useState } from "react";
import Interval from "./components/Interval";

// 사이드 이펙트?
// 데이터 가져오기, DOM 조작, 이벤트 등록/해제, 타이머 설정/해제 ...
// 실제 렌더링을 위한 동작을 제외한, 모든 나머지  코드들을 사이드 이펙트라고 할 수 있음

// 생명주기
// 컴포넌트가 생성, 수정, 삭제 기준으로 동작하기 때문

export default function App() {
  const [count, setCount] = useState(0);
  // 컴포넌트가 생성될 때 코드를 실행한다 -> []
  // 컴포넌트가 수정될 때 코드를 실행한다 -> [변수]
  // 컴포넌트가 삭제될 때 코드를 실행한다 -> 클린업 함수
  useEffect(() => {
    // 사이드 이펙트를 처리하기 위한 코드를 작성
    return () => {
      // 클린업(clean-up) 함수 (컴포넌트가 삭제될 때 호출되는 함수)
    };
  }, []);
  // [] 의존성 배열, 빈배열일 때는 컴포넌트가 생성될 때 단 한 번 만 실행됨
  // [count] 면, 일단 한 번 호출되고 나서 count 값이 바뀔 때마다 추가 실행이 되는 것
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      {count === 0 && <Interval />}
      {/* count === 0 일 때만 Interval 랜더링 됨 */}
    </>
  );
}
