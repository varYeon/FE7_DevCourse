import { useCounterStore } from "../stores/counterStore";

export default function CountButton() {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const incrementByAmount = useCounterStore((state) => state.incrementByAmount);

  // 구조분해할당 -> 동작은 하지만 컴포넌트 최적화가 안 됨 -> 비추
  // const {increment , decrement, reset, incrementByAmount} = useCounterStore();
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
      <button onClick={() => incrementByAmount(10)}>증가 10</button>
    </>
  );
}
