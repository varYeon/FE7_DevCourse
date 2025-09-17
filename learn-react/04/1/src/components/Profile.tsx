export default function Profile({
  name,
  age,
  clickHandler,
}: {
  name: string;
  age: number;
  clickHandler: () => void;
}) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <button onClick={clickHandler}>클릭</button>
    </>
  );
}
