// 1.
// export default function Child(props: { text: string }) {
//   // props = {text: "Hello, World!"}
//   return (
//     <>
//       <h1>{props.text}</h1>
//     </>
//   );
// }

// 구조 분해 할당 *
// export default function Child({ text }: { text: string }) {
//   // const props = {text: "Hello, World!"}
//   // const {text} = props
//   return (
//     <>
//       <h1>{text}</h1>
//     </>
//   );
// }

// 2.
// export default function Child(props: { age: number }) {
//   // props = { age: 42 }
//   return (
//     <>
//       <h1>{props.age}</h1>
//     </>
//   );
//   // {} 는 표현식으로 JSX에서 JS를 쓴다는 의미, 안 쓰면 문자열 취급됨, 변수 안 들어감
// }

// 구조 분해 할당
// export default function Child({age}: { age: number }) {
//   // props = { age: 42 }
//   return (
//     <>
//       <h1>{age}</h1>
//     </>
//   );
// }

// 3.
// export default function Child({ arr }: { arr: string[] }) {
//   // props = { arr: ["Apple", "Banana", "Cherry"] }
//   // {arr} = props
//   return (
//     <>
//       <h2>{arr[0]}</h2>
//       <h2>{arr[1]}</h2>
//       <h2>{arr[2]}</h2>
//     </>
//   );
// }

// 4.
// export default function Child({ obj }: { obj: { name: string; age: number } }) {
//   // props = {obj: { name: 'Alice', age: 30 }}
//   // {obj} = props
//   return (
//     <>
//       <h1>{obj.name}</h1>
//       <h2>{obj.age}</h2>
//     </>
//   );
// }
// type 써보기
// type User = { obj: { name: string; age: number } };
// export default function Child({ obj }: User) {
//   // props = {obj: { name: 'Alice', age: 30 }}
//   // {obj} = props
//   return (
//     <>
//       <h1>{obj.name}</h1>
//       <h2>{obj.age}</h2>
//     </>
//   );
// }

// 5.
// export default function Child({ isLoggedIn }: { isLoggedIn: boolean }) {
//   // props = { isLoggedIn: {true} }
//   // {isLoggedIn} = props
//   return (
//     <>
//       <h1>{isLoggedIn ? "로그인 성공" : "로그인 실패"}</h1>
//     </>
//   );
// }

// 6.
// export default function Child({ onClick }: { onClick: () => void }) {
//   // props = { onClick: () => {console.log("Click")} }
//   return (
//     <>
//       <button onClick={onClick}>click</button>
//     </>
//   );
// }

// 7.
// export default function Child({ name = "홍길동" }: { name?: string }) {
//   // props = {name: lisa} + ? + 기본값
//   return (
//     <>
//       <h1>{name}</h1>
//     </>
//   );
// }

// 8.
// // interface Style {style: {style:{{ font-size: string; color: string;}}}}
// interface Style {
//   style: React.CSSProperties;
// }
// export default function Child(props: Style) {
//   // props = {style: {{ font-size: 50px, color: red}}}
//   // style: { [key: string]: string }; 이용
//   // 구조 분해 할당 불가능??
//   return (
//     <>
//       <p style={props.style}>Child Component</p>
//     </>
//   );
// }

// 9.
export default function Child({
  Header,
  Content,
  Footer,
}: {
  Header: React.ReactNode;
  Content: React.ReactNode;
  Footer: React.ReactNode;
}) {
  return (
    <>
      {Header}
      {Content}
      {Footer}
    </>
  );
}
