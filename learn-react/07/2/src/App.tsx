import { useReducer } from "react";
import Count from "./components/Count";
import reducer from "./reducer/countReducer";

/*
type State = number;
type Action = { type: "INCREMENT" | "DECREMENT" | "RESET" };
*/
// 타입 파일로 따로 분리 - import

// 2. 리듀서함수
/*
 function reducer(state: State, action: Action) {
  // 기본적으로 두 개의 변수, 하나의 리턴값 필수
  // 변수 - 함수 매개변수의 이름은 내 맘대로 정해도 됨, 대신 어떤 값이 들어가는지는 정해져있음 (자동으로 들어감)
  // state는 초기값과 같은 타입, action은 객체이고 액션을 통해 나오는 타입을 써줌
  // 리턴값 - 없으면  반영 불가, 관례상 현재 상태값을 반환 (아무런 조치를 취하지 않을거라면)
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}  
  */
// reducer 파일로 따로 분리 - import

export default function App() {
  // 1. const [상태변수, 액션(리듀서)발생함수] = useReducer(리듀서함수, 초기값)
  // 리듀서함수 -> 상태 업데이트 로직이 담겨있는 함수
  // 상태변수의 값을 변경할 수 있는 로직이 reducer 안에만 존재, 업데이트는 리듀서 함수를 통해서만 가능
  // countDispatch -> 리듀서를 발생 시키는 역할 뿐

  const [count, countDispatch] = useReducer(reducer, 0);
  return (
    <>
      <Count count={count} dispatch={countDispatch} />
      {/* countDispatch의 타입은 알아낼 수 없으므로 타입 추론 이용
       */}
      {/* <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => countDispatch({ type: "RESET" })}>0</button>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>증가</button> 
      Count 컴포넌트로 분리*/}
      {/* ()에 액션에 전달될 부분을 작성 -> increment */}
    </>
  );
}
