import Button from "./components/Button";
import Buttons from "./components/Buttons";

export default function App() {
  return (
    <>
      {/* 컨텐츠가 없음 */}
      {/* <Button text={"결제"} />
      <Button text={"등록"} /> */}
      {/* 컨텐츠가 있음 */}
      <Button>결제하기</Button>

      <Buttons text="등록하기" />
      {/* 두 개는 같지만, 각자의 규칙을 만들어 일관성을 지켜가며 사용해야 함 (칠드런을 사용할 때, 안 할 때를 구분) */}
    </>
  );
}
