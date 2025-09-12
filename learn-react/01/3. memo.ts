// 1. package.json

// 1.1. script
// npm run dev 로 웹 여는데
// 여기서 dev -> "dev" : "vite" 로 되어 있기 때문
// "sy" : "vite" 이라면 npm run sy 해야 됨

// 1.2 dependencies와 devDependencies
// 1.2.1 dependencies -> 상용모드(베포)에 필요한 패키지 존제
// 1.2.2 devDependencies -> 개발에 필요한 패키지 존재
// 1.2.3 잘 못 적으면? -> 요즘 빌드 도구가 잘 되어 있어서 자동 이동 됨
// -> 그래도 올바른 위치에 적으려고 노력할 필요 (엄격하진 않음)
// 1.2.4 어떤 기준으로 설치
// 1.2.4.1 설치하려는 패키지의 공식 문서/깃헙 따라가면 됨
// ㄴ dependencies -> npm install 패키지명 / npm install 패키지명 --save /  npm install --save 패키지명
// ㄴ devDependencies -> npm install 패키지명 ---D / npm install 패키지명 ---save-dev

// 2. package-lock.json / node_modules 폴더
// 필요한 패키지들이 관리되고 검사되고 하는 부분 ?
// 우리가 직접 "손대지 않는" 부분
// 저기를 통해 수정해도 그건 수정된 것이 아님 -> 배포할 때 재생성 되기 때문

// 3. public
// 정적(static) 파일을 보관하는 폴더, 번들러의 타깃이 되지 않기를 원하는 파일 존재
// 정적 파일 -> 빌드 과정에서 번들러의 타깃이 되지 않는 폴더, 빌드 과정에서 가공되지 않고 제공
// 빌드 과정에서 public, src가 압축되어 dist 폴더에 들어감, 그 과정에서 public은 가공 안 됨 (src는 가공 됨)
// ㄴ npm run build
// 가공이란? 파일 압축 등... (웹팩 과정 처럼 번들러가 정리/가공을 해주는)

// 4. src
// 애플리케이션이 동작하는데 필요한 소스가 담긴 폴더

// + NPM, NPX, YARN, PNPM, BUM (강의노트 참고)
// 면접 단골 질문 :: 차이가 뭐고, 어떤걸 쓸거고, 왜 그렇게 생각하는가
