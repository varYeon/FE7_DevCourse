export default function User({
  userObj: { name, age },
  clickHandler,
}: UserProps) {
  // 구조 분해 할당 1
  //const { name, age } = props;
  // 구조 분해 할당 2
  // 메게변수에서 porps -> { name, age }
  return (
    <>
      <h1>name: {name}</h1>
      <h2>age: {age}</h2>
      <button onClick={clickHandler}>클릭</button>
    </>
  );
}
