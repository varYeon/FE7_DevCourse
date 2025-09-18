export default function Button({
  handleClick,
}: {
  handleClick: (name: string) => void;
}) {
  return (
    <>
      <button onClick={() => handleClick("kim")}>클릭!!</button>
    </>
  );
}
