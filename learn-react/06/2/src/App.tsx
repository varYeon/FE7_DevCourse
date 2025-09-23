// useRef
// current 속성을 가지는 객체를 반환
// current 속성으로 우리가 원하는 값을 저장할 수도 있고
// DOM 요소에 접근할 수도 있다 (90% 이렇게 사용)

// 폼 요소를 제어하는 방법
// 1. 제어 컨트롤러 (controlled)
// ㄴ 상태값을 이용하여 제어하는 방법, 입력 값이 리액트의 상태에 의해 제어되는 컴포넌트
// useState + onChange
// 실시간 입력값 체크 가능
// 2. 비제어 컨트롤러 (uncontrolled)
// ㄴ 입력값이 DOM 자체에서 관리되는 컴포넌트
// useRef + current
// 사용자의 실시간 입력을 체크 불가능, 특정 이벤트가 발생하여 값을 참조해야만 알 수 있음

import { useRef } from "react";

export default function App() {
  //const ref = useRef<HTMLHeadingElement>(null); // current 속성이 포함된 객체가 반환됨
  // 타입 추론으로 안 됨 -> <HTMLHeadingElement>(
  // documentquerySelector를 사용하지 않고 변수로 접근 하는?
  // const hanedlClick = () => {
  //   if (ref.current) {
  //     ref.current.style.color = "red";
  //   }
  // };

  const ref = useRef<HTMLInputElement>(null);
  // ref = {current : null}
  const checkboxRef = useRef<HTMLInputElement>(null);
  // 하나의 요소 당 하나의 ref 객체
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 이벤트 객체에 color. checkbox 에 대한 사용자 값이 저장
    e.preventDefault();
    // preventDefault() 메서드는 어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정
    console.log(ref.current?.value);
    console.log(checkboxRef.current?.checked);
  };

  return (
    <>
      {/* <h1 ref={ref}>hi</h1>
      <button onClick={hanedlClick}>click</button> */}
      <form onSubmit={handleSubmit}>
        <input type="color" ref={ref} />
        <input type="checkbox" ref={checkboxRef} />
        <button type="submit">전송</button>
      </form>
    </>
  );
}
/*
이벤트(handleSubmit) 함수를 버튼에 걸면 안 되나? -> form 태그는 submit이라느 고유한 동작을 갖고 있고, 
그 트리거로 type="submit" 속성을 가진 요소가 존재하는 것이 기본값임
그래서 버튼에 이벤트 함수를 직접 걸지 않아도, 버튼을 누르면 브라우저는 폼 제출을 자동으로 시도 하는 것
그리고 그 때 onSubmit 이벤트가 발생하게 되는 흐름
*/
