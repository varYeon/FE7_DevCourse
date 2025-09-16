// 1. 컴포넌트 (componemnt)
// 1.1 UI를 구성하는 가장 작은 단위이자, 재사용 가능한 독립적인 블록을 의미

// 1.2 컴포넌트의 정의 방법
// 1.2.1 클래스형 컴포넌트(Class Component)
// 1.2.1.1 React.Component 를 상속받아 만들며, render() 메서드 안에 JSX 반환

// 1.2.2 함수형 컴포넌트(Function Component)
// 1.2.2.1 함수로 정의하며, props를 받아 JSX를 반환

// 1.3 컴포넌트의 공통적인 특징
// 1.3.1 JSX 문법을 리턴한다는 것
// 1.3.2 JSX문법은 JavaScript + XML 확장 문법으로 자바스크립트 안에서 HTML과 비슷한 구문을 쓸 수 있게 해주는 확장 문법

// 1.4 클래스형 컴포넌트는 리액트 초창기부터 존재했던 방식
// 1.5 함수형 컴포넌트는 리액트 0.14버전~ (2015)
// 1.6 React 16.8 (1019년 2월) 리액트 훅(react hooks)
// ㄴ 클래스형에만 적용되던 문법(기능)이 있었으나 리액트 훅 이 후로 함수형도 지원 = 대체됨

// Snippets extension 설치 : 단축키 rfc, rafc 등 ...

// 1.7 JSX(Syntatic Sugar)
// 1.7.1 React.createElement()의 문법적 설탕

// 1.8 JSX의 규칙 & 특징
// 1.8.1 반드시 하나의 루트 태그만 사용되어야 함
// ㄴ return <h1></h1> <h2></h2> -> X
// ㄴ return <div>  <h1></h1> <h2></h2>  </div> -> O
// 1.8.1.1 쓸데없이 div tag를 렌더링 하는 것이 불편
// -> <React.Fragment> 사용, 의미없는 태그
// -> 단축하여 <>으로 사용 -> 하나만 쓰더라도 습관적으로 사용
// 1.8.2 여러 줄을 리턴할 때는 소괄호 (권장, Prettier 사용하면 자동)
// 1.8.3 반드시 태그를 닫는다 -> 빈태그도 닫는다 <br />
// 1.8.3.0 open tag + contents + close tag = element(요소), <br>과 같은 컨텐츠가 없는 태그 -> 빈태그
// 1.8.3.1 HTML4 <br /> -> HTML5 <br> -> but, JSX에서는 <br />
// 1.8.4 태그의 속성은 카멜 케이스로 작성
// ㄴ 예) tabindex라는 속성 -> tabIndex
// 1.8.4.1 속성명이 다른 것들이 있음
// ㄴ 예) class -> className, for -> htmlFor (이름이 다름)
// ㄴ 예) readonly -> readOnly, maxlength -> maxLength (카멜케이스 적용)
// 1.8.4.2 data-*, aria-*, 원래 그대로 사용할 수 있다
// 1.8.5 표현식을 사용할 수 있음 {}
// 1.8.6 인라인 스타일은 객체로 작성
// 1.8.7 주석 처리 {/* */}

// 2. 컴포넌트 (componemnt)
// UI를 구성하는 가장 작은 단위이자, 재사용 가능한 독립적인 블록을 의미 (재)
// 컴포넌츠 폴더를 만들어 그 안에 담고, App.tsx에 import 하기
// ㄴ return에 태그를 먼저 넣으면 자동완성(import) 가능
