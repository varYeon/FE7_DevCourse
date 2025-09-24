import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function CountDisplay() {
  const count = useSelector((state: RootState) => state.count.value);
  // value는 counterSlice.tsx의 value를 가리키게 됨 (initialState에 접근)
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
