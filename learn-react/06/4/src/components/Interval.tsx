import { useEffect } from "react";

export default function Interval() {
  useEffect(() => {
    // setup 함수
    // setInterval -> 브라우저 제공, 내장 타이머 함수 - 특정 코드를 일정 간격마다 반복 실행
    // const id = setInterval(callback, delay);
    const interval = setInterval(() => {
      console.log("interval 코드 실행!");
    }, 1000);
    // cleanup 함수
    return () => {
      clearInterval(interval);
      // 멈춰줌
      console.log("Interval 컴포넌트 제거됨");
    };
  }, []); // dependencies

  return (
    <>
      <h1>Interval Component</h1>
    </>
  );
}
/*
버튼을 누르면 멈춤 -> 버튼이 직접 연결된 것이 아니라 버튼을 통해 상태변화가 발생
조건부 렌더링에서 빠져나오면서 컴포넌트 언마운트로 클린업 함수가 실행되며 interval이 해제되어 멈추는 흐름
*/
