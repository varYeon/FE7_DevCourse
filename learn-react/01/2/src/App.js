// create-react-app (CRA)
// 페이스북이 만듦, 근데 바려졌어
// 이 방법은 이제 사용하지 않는 것이 좋다 (2025 공식적으로 버려졋다)
// 근데 이미 기업들이 많이 써서, 골격이 CRA일 수도 있음 (그 기업은 리액트 18 버전을 쓴다는거, 리액트 19부터는 지원안됨)
// 언젠가 업그레이드 해야댐... 내가... 해야될 수도...

// javascript가 아님
// JSX(JavaScript + XML) 확장 문법
// 페이스북 개발
// js가 아닌데 확장자가 .js ??

// 뜨거운 감자
// 1. JSX -> .js
// 일반적으로 웹브라우저가 읽을 수 있는 문법이 아님, 트랜스 파일 필요 (컴파일 같은거, JSX -> JS), 내장되어 있음
// 암튼 트랜스 파일 되나꺼 .js해도  상관없음
// 2.  JSX -> .jsx 로 해야 한다
// -> 현대 흐름 상 2번

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
