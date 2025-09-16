import User from "./components/User";

export default function App() {
  return (
    <>
      <User name="수연" age={30} address={{ zipcode: 1234, detail: "seoul" }} />
    </>
  );
}
