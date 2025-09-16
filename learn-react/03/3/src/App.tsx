// 2. 폰트 적용
/*
export default function App() {
  return (
    <>
      <h1 className="nanum-myeongjo-regular">안녕하세요, 글씨체가 어떤가요?</h1>
      <h1 className="doldam">이건 어떤가요</h1>
    </>
  );
}
  */

// 3. 이미지 적용 -  public 폴더 하위
// export default function App() {
//   return (
//     <>
//       <h1>App Component</h1>
//       {/* (1) img 태그 */}
//       <img src="/images/sky.jpg" style={{ width: "100%" }}></img>
//       {/* (2) class 사용 */}
//       <div className="bg"></div>
//       {/* (3) 인라인 */}
//       <div
//         style={{
//           width: "100%",
//           height: "400px",
//           background: `url('/images/sky.jpg') no-repeat center`,
//         }}
//       ></div>
//     </>
//   );
// }

// 3. 이미지 적용 -  src 폴더 하위
import sky from "./assets/images/sky2.jpg";
export default function App() {
  return (
    <>
      {/* (1) img 태그 */}
      <img src={sky} alt="구름" />
      {/* (2) 인라인 */}
      <div
        style={{
          width: "100%",
          height: "296.45px",
          background: `url(${sky}) no-repeat center center`,
        }}
      ></div>
      {/* (3) */}
      <div className="bg2"></div>
    </>
  );
}
