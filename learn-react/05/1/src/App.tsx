// 요소 반복 랜더링
// 그 요소를 가공해서 가공한 값이 포함된 배열을 만듦
// -> 그 배열을 포현식으로 출력

export default function App() {
  const items = ["Apple", "banana", "Cherry"];
  //const items = [<li>Apple</li>, <li>banana</li> <li>Cherry</li>
  // 0. 이런식으로 넘어올 일은 없으니까, 반복문으로 만들어줌 (가공)
  // -> 원본 데이터를 반복문으로 원하는 모양으로 가공하는 과정
  // -> 반복문 중에 베스트는 .map을 사용하는 것
  // 3. 배열 내의 객체
  const users = [
    { id: 1, name: "kim", age: 20 },
    { id: 2, name: "park", age: 25 },
    { id: 3, name: "lee", age: 30 },
  ];
  return (
    <>
      <h1>{items}</h1>
      {/* <h1>{"Apple", "banana", "Cherry"}</h1> 와 같음*/}

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
          // 1. map 메서드를 통해 새로운 배열을 만들고 표현식으로 바로 출력
          // 2. key라는 고유한 값을 할당 (id처럼 사용하는 느낌)
        ))}
        {/* // 3. */}
        {users.map((user) => (
          <li key={user.id}>
            {user.name} / {user.age}
          </li>
        ))}
      </ul>
    </>
    // 1.
    // JSX 언애서는 for문을 못 씀 {} 해도 안 됨 -> return 밖에서 사용해야 함
    // for문, for of, .map 등등 다 가능 -> map이 가장 원리에 가깝고 간결

    // 2.
    // 배열을 가공할 일이 없거나 배열의 뒷쪽으로만 새로운 요소가 추가될 경우 -> index key 값으로 써도 됨
    // 배열을 가공해야 할 일이 있는데, 그 배열의 앞에 새로운 요소를 추가하거나, 배열 요소와 요소 사이에 새로운 요소를 추가할 경우 -> indec 사용 X
  );
}
