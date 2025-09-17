import Child from "./components/Child";

// 1. 문자열을 props로 전달
// export default function App() {
//   return (
//     <>
//       <Child text="Hello, World!" />
//     </>
//   );
// }

// 2. 숫자 값을 props로 전달
// export default function App() {
//   return (
//     <>
//       <Child age={42} />
//     </>
//   );
// }

// 3. 배열을 props로 전달하기
// export default function App() {
//   return (
//     <>
//       <Child arr={["Apple", "Banana", "Cherry"]} />
//     </>
//   );
// }

// 4. 객체를 props로 전달 *
// export default function App() {
//   return (
//     <>
//       <Child obj={{ name: "Alice", age: 30 }} />
//     </>
//   );
// }

// 5. boolean 값을 props로 전달하여 조건 처리 *
// export default function App() {
//   return (
//     <>
//       <Child isLoggedIn={true} />
//     </>
//   );
// }

// 6. 함수를 props로 전달 **
// export default function App() {
//   return (
//     <>
//       <Child onClick={() => {console.log("Click")}} />
//       {/* text: "" -> text = ""
//       name = function() {return a}
//       name = () => a */}
//     </>
//   );
// }

// 7. 기본값을 가진 props 처리 **
// export default function App() {
//   return (
//     <>
//       <Child name="lisa" />
//     </>
//   );
// }

// 8. props로 스타일 전달하여 출력 ***
// export default function App() {
//   const style = { font-size: 50px, color: red};
//   return (
//     <>
//       <Child style={style}/>
//     </>
//   );
// }

// 9. props로 여러 자식 컴포넌트를 전달 ***
const Header = () => <h1>Header</h1>;
const Content = () => <h1>Content</h1>;
const Footer = () => <h1>Footer</h1>;

export default function App() {
  return (
    <>
      <Child Header={<Header />} Content={<Content />} Footer={<Footer />} />
    </>
  );
}
