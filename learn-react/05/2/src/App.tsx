// 이벤트
// 1. 이벤트 속성
// 1.1 모든 태그는 on으로 시작하는 특성이 있다
// -> 이벤트 타입 앞에 on을 붙여주면 됨
// 1.2 JSX -> 속성은 카멜 케이스로 작성 & 표현식 이용 (onClick, onKeyDown...)
// HTML 태그에는 DOM 표준 이벤트 속성만 사용 가능 / Component에는 원하는 이름의 이벤트 속성 자유롭게 정의 가능

// 2. 이벤트 핸들러 -> 방법 2가지
// 2.0 이벤트 핸들러 : 이벤트 발생시 실행할 함수
// 2.1 이벤트 참조값 연결 (함수 참조) : 함수를 JSX 밖에 적고 JSX 안에서 호출
// 2.1.1 handleClick()이 아닌 handleClick : html과 다름
// 2.2 화살표 함수 사용하여 매핑 (인라인 핸들러) : 이벤트 속성 안에 화살표 함수 작성
// 2.3 차이 (구분 기준)
// 2.3.1 매개변수를 전달해야 할 때 -> 화살표 함수 사용
// 2.4 컴포넌트로 나눠서 쓰기도 가능

import Button from "./components/Button";

export default function App() {
  const handleClick = () => {
    alert("click!");
  };
  return (
    <>
      {/* 2.1 이벤트 참조값 (함수 참조) */}
      <button onClick={handleClick}>클릭</button>
      {/* 주의 : handleClick()이 아님 -> 여러 번 실행됨 */}

      {/* 2.2 화살표 함수 (인라인 핸들러) */}
      <button
        onClick={() => {
          alert("click!");
        }}
      >
        클릭
      </button>
      <button onClick={() => handleClick()}>클릭</button>
      {/* handleClick()의 () 안에 매개변수 전달 */}
      {/* handleClick()을 handleClick 써도 됨, 매개변수 없으면 생략하는게 관례 */}

      {/* 컴포넌트에 쓸 때 */}
      <Button handleClick={handleClick} />
    </>
  );
}

//// 3. 이벤트 객체 **
// 이벤트 객체를 제공해주고 구현에 대한 책임은 브라우저에 있음, 다양한 브라우저가 전부 동일한 이벤트 객체를 가진다는 보장 없음
// 그래도 동일한 사용자 경험을 제공하기 위해 (동일한 값을 보장) 리액트가 한 번 더 가공을 거침
// -> Synthetic 이벤트 객체 (이걸 안 쓰고 오리지널 쓰면 위반 되는거)// 그래서 이벤트 객체를 (event) 이렇게 직접 못 쓰고, 무조건 전달 받아서 써야 함
// 3.2 type
// 이벤트 마다 타입이 다름 -> 타입 추론을 이용
// 암묵적으로 받는 애는 안 되지만 명시적으로 받는 애들은(onClick-> 매개변수 없는?) 타입추론이 됨
// ㄴ 암묵적인 애도 handleClick() 이렇게 잠깐 바꿔서 타입 추론으로 타입이 뭔지 알아낼 수 있음

// export default function App() {
//   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.currentTarget.style.color = "red"; // 3.3
//     console.log(e);
//     //console.log(event); // 사용 X (사용할 수 있어도 사용 금지)
//   };
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         {/* // handleClick() 잠깐 하면 타입 볼 수 있음 */}
//         <button onClick={(e) => handleClick(e)}>클릭</button>
//       </form>
//     </>
//   );
// }
