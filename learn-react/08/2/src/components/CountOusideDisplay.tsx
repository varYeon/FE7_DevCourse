import { useContext } from "react";
import { CounterContext } from "../App";

export default function CountOusideDisplay() {
  const { count } = useContext(CounterContext);
  return (
    <>
      <h1>Outside : {count}</h1>
      {/* 못받음 */}
    </>
  );
}
