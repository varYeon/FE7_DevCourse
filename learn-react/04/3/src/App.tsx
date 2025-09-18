// 1. if문
// export default function App() {
//   const isLogin = false;
//   if (isLogin) return <h1>로그인 되었습니다.</h1>;
//   return <h1>로그인 되지 않았습니다.</h1>;
//   // if문 하나일 떄는 else를 생략하는게 가독성 굳
// }

// 2. 삼항 연산자
// export default function App() {
//   const isLogin = false;
//   // 2.1
//   // return <h1>{isLogin ? "로그인 되었습니다." : "로그인 실패"}</h1>

//   // 2.2
//   // 태그가 여러 개 들어간다면 <></>로 한 번 더 감싸줌
//   return (
//     <>
//     {isLogin ? <h1>"로그인 성공"</h1> : <h1>"로그인 실패"</h1>}
//     </>
//   );

//   // 2.3 이런 것도 가능, 컴포넌트 이용
//     // return <>{isLogin ? <LogIn/> : <LogOut/>}</>
// }

// 3. 논리 연산자 (&&)
export default function App() {
  const isLogin = false;
  return (
    <>
      {!isLogin && <h1>LogIn</h1>}
      {/* {isLogin && <LogIn />} */}

      {isLogin && (
        <>
          <h1>로그인 성공</h1>
          <h2>축하합니다</h2>
        </>
      )}
    </>
  );
}
