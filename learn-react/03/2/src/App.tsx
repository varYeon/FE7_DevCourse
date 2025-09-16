// 1.4.2.1 styled-components
/*
import styled from "styled-components";

export default function App() {
  const HelloWorld = styled.h1`
    // 대문자 지정
    color: pink;
    text-decoration: underline;
    &:hover {
      color: red;
    }
  `;
  return (
    <>
      <HelloWorld>Hello, World</HelloWorld>
      {/* 무슨 태그인지 파악이 어려움 */ /*}
    </>
  );
}*/

// 1.4.2.2 emotion
/*
import { css } from "@emotion/css";
const color = "white";

export default function App() {
  return (
    <>
    <div
    className={css`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    &:hover {
      color: ${color};
      }
      `}
      >
      Hover to change color.
      </div>
      </>
      );
      }
      */

// 1.4.2.3 vanilla extract
//import { endFileScope } from "@vanilla-extract/css/fileScope";
import { button } from "./css/style.css";
export default function App() {
  return (
    <>
      <button className={button}>바닐라</button>
    </>
  );
}
