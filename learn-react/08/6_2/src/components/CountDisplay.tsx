import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function CountDisplay() {
  const count = useSelector((state: RootState) => state.count.value);
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
