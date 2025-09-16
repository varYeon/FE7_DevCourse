// import React from "react";

// 2. 컴포넌트
import Article from "./components/Article";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <Article /> {/*import 자동 완성 가능 */}
      <Footer />
      <Aside />
      <Nav />
    </>
  );
}

// 1.2

// 클래스 컴포넌트
/* class App extends React.Component {
  render(): React.ReactNode {
    return <h1>Hello, World(With Class Components)</h1>;
 }
}
*/

// export default App;

// 함수형 컴포넌트
// 1. export default function App() {} -> 한 번에
// 2. export default App; -> 따로
// 3. 함수도 여러 가지 방식으로 사용
// 간단, 더 선호됨
/*
function App() {
  return <h1>Hello, Woeld(Function Component)</h1>;
}
export default App;
*/

// 1.7 JSX문법
/*
 // 리턴 안에 부분만 JSX 문법이 적용된 것
 return (
 <div>
 <h1 className="title">Hello, h1 Tag</h1>
 <h2>Hello, h2 Tag</h2>
 </div>
 );
 */

// 1.7.1
/*
return React.createElement(
 "div", null, React.createElement("h1", { class: "title" },"Hello, h1 Tag")
 React.createElement("h2", null, "Hello, h2 Tag")
 );
 */

// 1.8.1.1 <React.Fragment>
/*
 return (
 <> //<React.Fragment>의 의미
 <h1>App Component</h1>
 <h2>App Component</h2>
 </>
 );
 */

// 1.8.5
/*
export default function App() {
  const name = "kim"; // JS
  return (
    <>
      <h1>999 * 999 = {999 * 999}</h1>
      <h2>name: {name}</h2>
    </>
  );
}
  */

// 1.8.6
/*
<h2
  style={{
    color: "red",
  }}
>
  name: {name}
</h2>;
*/

// JSX에서의 주석 처리
{
  /* */
}
