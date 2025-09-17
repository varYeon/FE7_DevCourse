// 1.4 CSS-IN-JS
// 1.4.1 CSS를 자바스크립트 코드 안에서 작성하고 사용하는 방식
// -> 유지보수 할 수 있을 정도의 수준까지

// 1.4.2 유명한 CSS-IN-JS 라이브러리

// 1.4.2.1 styled-components (개발 공식 종료) -> 유지 보수 모드, 기능 추가 없음
// 1.4.2.1.1 별도의 설치 필요, npm install styled-components (공식문서)
// 1.4.2.1.2 styled.태그명`` -> js의 태그드 리터럴 문법 (이거 쓸 때나 사용)
// 익스텐션 : vscode-styled-components -> 스타일 태그에 색상 부여
// 1.4.2.1.3 단점 : 무슨 태그인지 파악이 어려움 (무슨 마크업을 가졌는지 파악 어려움)

// 1.4.2.2 emotion
// 태그 단점 개선, classname 사용
// 1.4.2.2.1 별도의 설치 필요, npm i @emotion/css (공식문서)
// 1.4.2.2.2 styled-components처럼 사용할 수 있음 (npm install @emotion/styled)

// CSS-IN-JS의 (근본적 단점)
// CSS를 자바스크립트가 생성한다 -> 자바스크립트 런타임에 CS가 생성된다
// -> 스타일링 많이 할 수록 자바스크립트 런타임 처리가 되는 코드 양이 증가 -> 퍼포먼스 떨어짐

// 1.4.2.3 vanilla extract
// 1.4.2.3.1 제로-런-타임 (zero-run-time)
// 빌드할 때 CSS 생성해서 (CSS 파일로 만들어버려서) 런타임 시간을 제로로 하겠다
// 1.4.2.3.2 설치, npm install @vanilla-extract/css
// 빌드도구에 맞는 추가 설정, npm install --save-dev @vanilla-extract/vite-plugin
// 1.4.2.3.2 별도의 ts 등의 파일에 css 만듦 style.css.ts

// 참고
// npm run build
// npm run preview
// 4173 링크 -> 빌드 된 버전
