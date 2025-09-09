import type ts = require("typescript");

{
  // 5. *타입별칭 (type alias)
  // 나만의 커스텀 타입을 만들 수 있는 방법을 제공합니다 (실무에서 보통 다 이걸 씀)
  const user1: {
    name: string;
    age: number;
    gender: string;
  } = {
    name: "kim",
    age: 20,
    gender: "male",
  };
  // user가 여러 개 필요하다면 계속 이 함수 전체를 복붙, 너무 가독성이 떨어짐

  // ts에서는 타입 별칭을 사용 (공통 부분을 뜯어내서 따로 정의)
  type Person = {
    name: string;
    age: number;
    gender: string;
  };
  // 타입 키워드(type) + 타입명(식별자) + 안에 넣고 싶은 것(정의할 타입들)을 넣음
  // 식별자는 대문자, 소문자 무관 / but, 관례적으로는 첫글자 대문자로 씀
  const user2: Person = {
    name: "sy",
    age: 25,
    gender: "female",
  };
  // 타입 위치는 무관, user2 아래에 있어도 됨
  // js와 다르게 컴파일언어 이기 때문
  // 컴파일언어인 ts를 실행하고 컴파일러로 js로 변환시킨 다음에 쓰는거임, 컴파일 과정에서 위치 조정이 일어남, 그래서 문제가 없음 *

  // 타입 별칭의 장점
  // 가독성, 유지보수, 코드의 확장성

  /* 5.1 기본 타입 별칭 */
  type ID = string | number;
  const userID: ID = "student=sy";
  const production: ID = 1;
  // 유니온 타입으로 안 쓰고 단일 타입만 하는 것도 가능함
  type stringID = string;
  const serviceID: stringID = "halo";
}
{
  /* 5.2 객체 타입 별칭 */
  type User = {
    name: string;
    readonly age?: number;
    // 배운 잔잔바리 다 사용 가능 (인덱스 시그니처, readonly, 옵셔널 파라미터 ('?') 등):: 객체 타입이라서 쓸 수 있음
  };

  const per1: User = {
    name: "kim",
    age: 20,
  };
}
{
  /* 5.3 함수 타입 별칭 */
  const add: (a: number, b: number) => number = (a, b) => a + b;
  // 아래처럼 바꿈, 가독성 증가
  type AddFun = (a: number, b: number) => number;
  const add2: AddFun = (a, b) => a + b;
}
{
  /* 5.4 튜플 타입 별칭 */
  type Point = [number, number];
  const point: Point = [10, 20];

  /* 5.5 타입 확장 */
  // 결합도 증가
  // 타입 확정 방법 :: 1. 유니온 타입(|), 2. 인터섹션 타입(&)

  // 1. 유니온 타입(|)
  type StringID = string;
  type NumberID = number;
  type ID = StringID | NumberID;

  // 2. 인터섹션 타입(&)
  type Nameable = {
    name: string;
  };
  type Ageable = {
    age: number;
  };
  type Person = Nameable & Ageable;
}
{
  /* 5.6 리터럴 타입 별칭 */
  type Direction = "UP" | "RIGHT" | "LEFT" | "DOWN";
  const direct: Direction = "RIGHT";

  // 주의할 점 ::
  // 타입명(식별자명)이 고유해야함, type Direction을 또 쓰면 오류가 남, 덮어씌워지거나 하지 않음
}
