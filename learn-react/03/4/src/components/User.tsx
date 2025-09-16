export default function User(props: {
  name: string;
  age: number;
  address: { zipcode: number; detail: string };
}) {
  // 관례상 props, 다른 이름 써도 큰 일은 안남
  // props는 객체임, TS기반이므로 타입 명시 필요
  // string아닌 것들은 표현식 사용 {} -> age={30} 이런 식으로
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.address.zipcode}</h2>
      <h2>{props.address.detail}</h2>
    </>
  );
}
