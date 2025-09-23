import { useContext } from "react";
import { CounterContext } from "../contexts/counter/counterContext";
import { ConfigContext } from "../contexts/configure/configureContext";

export default function CountButtons() {
  const { increment, decrement, reset } = useContext(CounterContext);
  const { setDarkMode, setLightMode } = useContext(ConfigContext)!;
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
      <br />
      <br />
      <button onClick={setDarkMode}>다크모드</button>
      <button onClick={setLightMode}>라이트모드</button>
    </>
  );
}
