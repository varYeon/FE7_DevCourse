// 3.1.1 인라인 스타일(inline style)
/*
export default function App() {
  return (
    <>
      <h1
        style={{
          color: "red",
          fontSize: "50px",
          textDecoration: "line-through",
        }}
        // 속성명은 카멜 케이스로 작성
      >
        App Component
      </h1>
    </>
  );
}
   */

// 3.1.2 외부 스타일(external style)
/*
//import "./App.css";
import First from "./components/First";
import Second from "./components/Second";

export default function App() {
  return (
    <>
      <h1>App Component</h1>
      <h2 className="title">Externam Style</h2>
      <First />
      <Second />
    </>
  );
}
  */

// 3.2 CSS Modules (*.module.css)
/*
import styles from "./App.module.css";
//import app from "./App.module.css"; // 관례로 styles를 사용할 뿐, 이름 바꾸기 가능
import First from "./components/First";
export default function App() {
  return (
    <>
      <h1 className={styles.title}>App Component</h1>
      {/* <h1 className={app.title}>App Component</h1> */ /*}
      <First />
    </>
  );
}
*/

// classnames package (다시 이해해보기) (꼭 알아야 함)
// 참고 https://www.npmjs.com/package/classnames
import styles from "./App.module.css";
import cg from "classnames";
import classNames from "classnames/bind";
// 패키지 선택 실수 주의 -> 전역과 사용할지 / css 모듈과 접목(bind 선택)해서 사용할지
// bind는 모듈 사용할 때 쓰는거

export default function App() {
  const isCancle = false;
  const isItalic = true;
  const cx = classNames.bind(styles);
  return (
    <>
      {/* 패키지를 안 쓰는 경우, 여러 개 쓸 때, 대쉬가 포함될 때 가독성이 나쁨 */}
      <h1
        className={`${styles.red_c} ${isCancle ? styles["line-throught"] : ""}`}
      >
        App Component
      </h1>
      <h1 className={`primary ${isItalic ? "italic" : ""}`}>Global</h1>
      {/* 패키지를 쓰는 경우. 여러개+대쉬 이외에 조건부를 쓰는 경우 효과적 */}
      <h1 className={cx("red_c", "line_through")}>App Component</h1>
      <h1 className={cx("red_c", { line_through: isCancle })}>App Component</h1>
      <h1 className={cg("primary", { italic: isItalic })}>Global</h1>
    </>
  );
}
