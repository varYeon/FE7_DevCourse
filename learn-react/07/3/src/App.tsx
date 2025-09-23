// 0.
// App -> A -> B -> C 수직 구조, App 이 리렌더링 되면 자식들이 전부 같이 리렌더링
// 민약 A가 리렌더링되면, App 빼고 A의 자식들이 모두 깉이 리렌더링 (B, C)
// 컴포넌트가 엄청 많이 뻗어져있다면 (실무) -> App이 리렌더링 될 때 그 아래의 수많은 컴포넌트가 같이 리렌더링 되게 됨 (퍼포머스 나빠짐)
// ㄴ app 상태가 변경될 때 관련이 없는 자식 컴포넌트도 영향을 받음, 불필요한 리렌더링 게속 발생
// 리렌더링 -> 함수가 재호출 -> 그 안에서 자식을 다시 호출 (A/) -> 자식들에서 또 반복
// ---> 그래서 흐름을 끊어서 작성해주는게 리액트에서 베스트, 그렇게 작성하는 방법 = "컴포넌트 최적화 패턴"
// 1. 컴포넌트 최적화 패턴
// 1.1 React.memo() -> 컴포넌트를 메모이제이션
// 1.1.1 메모이제이션 : 한 번 계산한 결고를 저장(cache) 해 두었다가
// ㄴ 같은 입력이 들어오면 다시 계산하지 않고 계산한 결과를 재사용하는 방식
// 1.1.2 원하는 함수를 () 안에 넣으면 내부에 저장이 되고, 달라지는게 없으면 리렌더링 하지 않음
// 1.1.3 A를 메모이제이션 했는데 B,C도 리렌더링 안 됨? -> A자체가 리렌더링 안 되면 그 안에서 B를 재호출 하지 않으므로
// 1.1.4 A를 최적화 했는데 B(C)에 변경사항이 있으면? ->
// 컴포넌트 메모이제이션 : 1. 컴포넌트의 메모이제이션 props가 변경될 때, 2. 자기 자신의 상태가 변경될 때
// ㄴ 1,2 상황에서 메모이제이션이 풀리게 됨
// A를 최적화했을 때 app을 리렌더링 하면 A,B,C는 리렌더링 안 되지만, A를 리렌더링 하면 B,C 도 리렌더링 됨 -> B도 최적화로 막아
// 다 메모이제이션 하면 좋은거 아닌가? -> 계산을 저장하고 가져오는 과정에서 리액트가 계산해야하는 연산 비용이 발생됨,
// ㄴ 메모이제이션 연산 비용은 높은 편, 따라서 남발하면 오히려 성능이 저하됨 -> 신중한 사용 필요 (꼭 필요한 부분을 찾아서 사용)
// ㄴ 필요? -> 애플리케이션을 처음 설계할 때부터 컴포넌트 최적화를 할 수 없음 (예측 no) -> 가장 마지막에 문제가 되었을 경우에 사용
// 함수는 참조자료형,,,, -> 메모이제이션이 잘 안댐?
// 1.2 useCallback(함수,[]); -> 함수를 메모이제이션 함, []빈배열-최초렌더링될 때 메모이제이션됨
// 1.3 useMemo(함수,[]); -> 값을 메모이제이션

import { useCallback, useMemo, useState } from "react";
import A from "./components/A";

// 연산이 많이 들어가는 로직이 포함되는 경우 (비용업로직)
function heavyCalculator() {
  let result = 0;
  for (let i = 0; i > 1_000_000_000; i++) {
    result += i;
  }
  return result;
}

export default function App() {
  const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  const totalSum = useMemo(() => heavyCalculator(), []);
  console.log("App Rerendring");
  return (
    <>
      <h1>App Count: {count}</h1>
      <h1>1 ~ 10억: {totalSum}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <A handleIncrement={handleIncrement} />
    </>
  );
}
