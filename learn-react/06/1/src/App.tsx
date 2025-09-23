// 간단 복습
// 1. 리액트에서 상태 (state)
// 1.1 컴포넌트 내부에서 변경 가능한 데이터를 의미
// ㄴ 사용자 입력, 서버 응답, UI 상호작용 등으로 인해 값이 변경될 수 있다
// ㄴ 만약 값이 변경되면 컴포넌트가 자동으로 다시 렌더링되어 화면에 새로운 값이 반영 -> 리렌더링

import { useState } from "react";

// // 1.2 리액트 훅 (16.8)
// // 1.2.1 함수형 컴포넌트에서도 상태(state)나 생명주기(lifestyle) 같은 리액트 기능을 사용할 수 있게 해주는 특별한 함수
// // ㄴ useState(), useRef(), useReducer(), useEffect()...
// export default function App() {
//   //const [name, setName] = useState(0);

//   // 1.3 타입추론 적극 활용 -> 일관성, 팀의 규칙을 따르기
//   // 1.4 useState -> 배열 반환, [상태변수, 상태업데이트함수]
//   // ㄴ 구조 분해 할당 ? -> 유의미한 이름 짓기, 이름 관례 따르기 - [name, setName]
//   //const handleUpdate = () => {
//   // 1.5 방법 2가지
//   // 1.5.1 상태업데이트함수(값) -> 변경해야되는 상태 값이 이전 상태와 상관 없다면
//   //setCount(10);
//   // 1.5.2 상태업데이트함수(콜백) -> 변경해야되는 상태 값이 이전 상태와 관련 있다면
//   //setCount((count) => count + 1);
//   //};

//   // 1.6 (추가)
//   const [user, setUser] = useState({ name: "kim", age: 20 });
//   const handleUpdate = () => {
//     // 객체의 경우 값이 변경 되면 값이 직접 변경되는 것이 아니라 주소값이 변경됨
//     // ㄴ 변수값이 직접 들어가는 것이 아니라, 어딘가에 정의된 객체의 주소값이 들어가기 때문 (추상화)
//     // 따라서 새 객체 껍데기를 만들어줌, 기존의 속성을 전개해서 펼치고, 새 값 넣기 (객체 전체가 아닌 일부가 변경되는 경우)
//     // user.age = 30;
//     // const newUser = structuredClone(user);
//     // SpeechSynthesisUtterance(newUser);
//     // 위 3줄을 이렇게 간략화 가능
//     setUser((user) => ({ ...user, age: 40 }));
//     // 소괄호의 이유 :
//     // 화살표 함수 축약으로 return과 중괄호를 지움, 근데 객체의 중괄호가 남음
//     // 화살표 함수의 리턴을 의미하는 중괄호와 혼동됨 -> ()로 객체를 한 번 더 감싸줌
//   };

//   return (
//     <>
//       <h1>Name: {user.name}</h1>
//       <h1>Age: {user.age}</h1>
//       <button onClick={handleUpdate}>click</button>
//     </>
//   );
// }

// 2. useState 활용 예
// 2.1 useState + Form
// onChange (React) => onInput + onChange (DOM)

// 2.1.1
// input, useState, event* -> 함수 참조 방식 - onChange
// export default function App() {
//   const [text, setText] = useState("");
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setText(e.target.value);
//     // value는 문자열이기 때문에 useState의 초기값에도 빈문자열을 넣어 초기화 해줌 -> 안 넣으면 undefined로 시작
//   };
//   return (
//     <>
//       <h1>{text}</h1>
//       <input
//         type="text"
//         placeholder="이메일을 입력해주세요"
//         onChange={handleChange}
//       />
//     </>
//   );
// }
/*
흐름 정리 : 처음 text는 useState("") 로 인해 초기값 = "" 빈 문자열임, onChange={handleChange}를 통해 handleChange가 호출되고
텍스트가 이벤트객체 e에 저장하면 e.target = 이벤트가 발생한 태그 (input), .value로 input 안의 값에 접근
그리고 그 값을 setText()안에 넣음, ()안의 값은 새로운 상태값을 의미하고, setText는 상태를 업데이트 하는 함수임
그래서 상태변수 text는 업데이트 된 새로운 값(사용자 입력값)을 갖게 되고 <h1>{text}</h1>을 통해 출력됨
*/

// 2.1.2
// // input, 조건, useState, event-매개변수없음-onChange
// export default function App() {
//   const [value, setValue] = useState(true);
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.checked);
//     // 여기선 .value가 아니라 .checked가 됨 -> checkbox, radio 같은데서 선택값에 접근하게 함
//   };
//   return (
//     <>
//       <pre>{value ? "동의함" : "동의하지않음"}</pre>
//       {/* pre : 미리 서식을 지정한 텍스트를 나타내며, HTML에 작성한 내용 그대로 표현 */}
//       <label>
//         <input type="checkbox" onChange={handleChange} checked={value} />{" "}
//         이용약관에 동의합니다
//         {/* input은 빈태그임 <input/> 이렇게 씀, 닫는 태그 따로 쓰면 틀린 문법
//           옆의 텍스트는 input 자식이 아니라 옆에 있는 텍스트 노드임
//           그래서 label로 체크박스와 텍스트를 묶은 것*/}
//       </label>
//     </>
//   );
// }
// /*
// 어떻게 체크를 누르면 true로 바뀌는거임? -> useState(false) = 체크안됨, useState(true) = 체크됨
// 그럼 초기값에 true를 넣었을 때 왜 체크된 상태로 시작을 안 하지? -> input에 checked 속성을 안 걸어주면 상태값과 화면 연결 안 됨?
// ㄴ useState(true) 여도 checked = {value} 를 따로 넣어줘야 반영됨 (기본동작이 체크안됨 상태라서)
// 구현한건 체크 동작 -> 텍스트출력ㄷ 바뀜 / 위의 의문은 그 텍스트값{value}을 체크에 반영하는거라 애초에 다른거임
// 그니까 따로 장치를 해두지 않으면 true값을 가지고 있어도 기본값인 체크안됨 상태가 나타나는 것
// */

// 2.1.3
// radio 버튼 (선택지에서 무조건 하나를 골라야 하는 경우 -> 딱 하나만 고를 수 있음)
export default function App() {
  const [select, setSelect] = useState("남자");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelect(e.target.value); //*value (.checked -> boolean 값)
  };
  return (
    <>
      <pre>{select}</pre>
      <div>
        <input
          type="radio"
          name="gender"
          value="남자"
          defaultChecked
          onChange={handleChange}
        />{" "}
        남자
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          value="여자"
          onChange={handleChange}
        />{" "}
        여자
      </div>
    </>
  );
}
/*
checked = {value} 과 defaultChecked ?? 
-> 전자는 처음 렌더링에서 체크된 상태로 시작 & 초기값 설정 후 이후의 값은 관리 안 함, 후자는 값과 화면 동기화
name 속성은 왜 필요하지 ?? -> 라디오 버튼은 하나만 선택해야 되는게 특징임, 그게 한 그룹 안에서 하나만 선택해야됨
name 속성을 통해 그룹을 묶는 것
*/

// 2.1.4
// export default function App() {
//   const [text, setText] = useState("");
//   // 타입만 주의하자!
//   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setText(e.target.value);
//   };
//   return (
//     <>
//       <pre>{text}</pre>
//       <textarea onChange={handleChange} placeholder="이메일을 입력해주세요" />
//     </>
//   );
// }

// 2.1.5
// export default function App() {
//   const [text, setText] = useState("banana");
//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setText(e.target.value);
//   };
//   return (
//     <>
//       <pre>{text}</pre>
//       <select onChange={handleChange} value={text}>
//         <option value="apple">apple</option>
//         <option value="banana">banana</option>
//         <option value="orage">orange</option>
//       </select>
//     </>
//   );
// }
