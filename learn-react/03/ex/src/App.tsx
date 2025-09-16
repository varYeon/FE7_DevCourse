// 연습문제
// 실습) 컴포넌트 생성 하기

import Headers from "./components/Headers";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Headers />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
