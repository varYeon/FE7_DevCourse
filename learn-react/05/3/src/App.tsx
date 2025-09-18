// 리액트 변수 선언 키워드
// useState() : 상태 변수 : 어딘가에 있는 함수

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  // 1. [상태변수, 상태업데이트함수] -> [name, setName] (이름 짓기 관례)
  // 2. 리렌더링
  // 3. useState<number>(0) 에서 <number> 가 생략된 형태
  // 3.1 생략을 권장
  // 3.2 생략이 불가능한 경우, setCount(값) -> 값의 타입이 변하는 경우
  // ㄴ 예. 초기값이 숫자 였는데 나중에 넣을 값이 문자열이 되거나 하는 경우 <number|string> 명시 필요
  const handleIncrement = () => {
    //setCount(10); //setCount(값)
    setCount((count) => count + 1); //setCount(콜백함수)
  };

  // 4.1 setCount(값)
  const [name, setName] = useState("");

  return (
    <>
      {/* 4.2 setCount(콜백함수) */}
      <h1>count: {count}</h1>
      <button onClick={handleIncrement}>증가</button>

      {/* 4.1 setCount(값) */}
      {/* kim 을 변경하는데 원래 값이던 kim을 이용해서 무언가 값을 변경하는 것이 아님 */}
      <h1>Name: {name}</h1>
      <button onClick={() => setName("kim")}>이름 변경</button>
    </>
  );
}

// 4. 상태업데이트함수 사용법
// 4.1 setCount(값)
// 4.2 setCount(콜백함수)
// 4.3 어떤 기준으로 구분 -> 변경하고자 하는 값이 원래의 값과 관련이 있는 경우에 콜백함수 이용 (현재 상태값을 갖고 조작이 해야된다면 -> count + 1 처럼 현재 상태값을 이용하는 경우)
// 4.4 보이는 결과는 똑같은데 왜 두 가지? -> 콜백함수의 매개변수로는 항상 최신의 값이 넘어옴, 최신값 보장
// 4.4.1 예를 들어 값으로 하는 경우 setCount(count + 1); 을 세 번 적으면 최종적으로 카운트 3이 아닌 1이됨
// ㄴ 콜백함수로 하는 경우 setCount((count) => count + 1); 을 세 번 적으면 최종적으로 카운트가 3이 증가 됨
// 4.4.2 값으로 하는 경우 1만 증가하는 이유? -> 리액트는 오리지널 돔으로부터 복사본(가상돔)을 두 개 만듦, 변경사항을 한 번에 모았다가 오리지널에 보냄?
// ㄴ 만약 이런 식으로 처리 하지 않는다면 처리 될 때마다 하나씩 보내고 반영하고 이렇게 됨 (리액트는 효율이 나쁘다고 판단)
// ㄴ 예를 들어 setCount(count + 1); 를 세 번 적으면 하나 보내고 반영하고 이걸 3번 반복하데 되는게 효율이 나쁘다고 생각해서, 하나로 묶어서 보낸다는 의미
// 4.5 공식 문서에서는 (count) => count + 1에서 count 가 아닌 prev, prev** 형식으로 사용하지만
// ㄴ 강사님은 상태 변수 이름과 동일한 것을 사용할 것 (좀 더 직관적이라고 생각되어)
