import Page from "./components/Page";
import CounterProvider from "./contexts/counter/CounterProvider";

export default function App() {
  return (
    <>
      <CounterProvider>
        <Page />
      </CounterProvider>
    </>
  );
}
