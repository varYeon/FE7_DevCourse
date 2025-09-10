{
  /* 인덱스 접근 타입 */
  // 갹체 타입에서 특정 키를 사용해 그 키의 값 타입을 추출하는 문법
  // 런타임에서 객체의 속성으로 값을 꺼내듯이, 타입차원에서 타입 속성으로 값의 타입을 꺼내는 것

  type Person = {
    name: string;
    age: number;
  };

  type NameType = Person["name"];
  type AgeType = Person["age"];

  type NameAndAge = Person["name" | "age"]; // 유니언으로 타입으로 묶여서 추출됨
}
{
  /* const 단언 */
  // 값 -> 리터럴
  // 객체의 속성의 값 -> readonly

  //let x = "Hello"; // string type
  let x = "Hello" as const; // 리터럴 type

  const numArr = [1, 2, 3] as const; // readonly type
  //numArr.push(5); // 불가능

  const obj = {
    name: "kim",
    age: 20,
  } as const; // 리터럴 타입 + readonly 가 됨
}
{
  /* const enum VS enum */

  // const enum은 코드 흔적이 안 남아서 파일크기를 줄여 전체 성능 증진에 좋지만
  // enum은 코드 흔적 (파일)이 남아서 런타임에서 재가공을 할 수 있다는 장점이 있음
  enum Status {
    Pending = "PENDING",
    Success = "SUCCESS",
    Fail = "FAIL",
  }

  // 가공
  const options = Object.values(Status).map((value) => ({
    label: value,
    value,
  })); // 리액트 까지 배워야 이해할 수 있을 코드?

  console.log(options);
}
{
  // 최신 트렌드 - 이 둘의 장점만 가진 것을 사용
  // ㄴ 가공 가능 + 파일 크기가 줄어든건 아님 but 번들러의 트리세이킹 적용이 되는 애라서 결론적으로 줄어듦
  // ㄴ enum은 트리세이킹이 안 됨, 대상이 아님?, 번들링 해도 파일 크기 안 줄어듦
  // (고고급, 어려움, 계속 이해하려고 노력)

  const Status = {
    Pending: "PENDING",
    Success: "SUCCESS",
    Fail: "FAIL",
  } as const; // 1. 객체로 만들고 as const

  type Statue = (typeof Status)[keyof typeof Status]; // 2. type 만들고 공식처럼 사용
  console.log(Status.Success);
}
{
  // enum과 비교 -> 형태는 다르지만 결과가 같음
  enum Status {
    Pending = "PENDING",
    Success = "SUCCESS",
    Fail = "FAIL",
  }
  console.log(Status.Success);

  // 번들러 -> SASS, SCSS, ts -> HTML, CSS, JS로 변환하며 코드 양을 압축해주는 도구 (코드 압축의 최후의 보루)
  // 여러 기능이 탑제됨
  // 그 중 tree-shaking -> 불필요한 코드를 제거해주는 기능 (컴파일 과정에서 최종적으로 안 쓰이는 코드는 트리 세이킹이 삭제)

  // 결국엔 enum 그대로는 안 쓰고, 최신 트렌드 방법처럼 단점을 보완해서 씀
}
