import CountButtons from "./CountButtons";
import CountDisplay from "./CountDisplay";

// Count는 아무런 역할을 하지 않음, 받아서 전달하기 위한 목적 뿐임
// 단순 전달자 역할의 컴포넌트가 생김
//  props Drilling 패턴 -> app - count - countdisply 로 드릴 뚫듯이 내려간다
export default function Count({
  count,
  increment,
  decrement,
  reset,
}: {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}) {
  return (
    <>
      <CountDisplay count={count} />
      <CountButtons increment={increment} decrement={decrement} reset={reset} />
      {/* 받은 다음에 다시 전달 */}
    </>
  );
}
