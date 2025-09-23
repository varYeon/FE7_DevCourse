import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";

export default function CountButtons() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <button onClick={() => dispatch({ type: "counterSlice/decrement" })}>
        감소
      </button>
      <button onClick={() => dispatch({ type: "counterSlice/reset" })}>
        리셋
      </button>
      <button onClick={() => dispatch({ type: "counterSlice/increment" })}>
        증가
      </button>
    </>
  );
}
