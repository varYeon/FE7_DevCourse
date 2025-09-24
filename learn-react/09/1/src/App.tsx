// immer
// 개발자가 불변성을 신경쓰지 않아도 불변성을 신경쓰는 상태로 만들어줌
// 불변성 -> 값에 직접 접근에서 수정하는건 피해야 함
// 근데 state.value += 1; 처럼 직접 언급할  수 있었는데 그 이유는 immer 덕에 잘 수정되어서 넘어갓기 떄문ㅇ

import Page from "./components/Page";

// Zustand

// immer(콜백함수) + npm  (추가 설치, 불변성 관리 자동
export default function App() {
  return (
    <>
      <Page />
    </>
  );
}
