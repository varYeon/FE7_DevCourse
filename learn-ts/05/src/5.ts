// condition
{
  // 선언 병합
  // (중요) enum도 interface처럼 선언 병합이 됨!
  interface User {
    name: string;
  }
  interface User {
    age: number;
  }

  // enum
  enum Direction {
    UP, //0
    DOWN, //1
  }
  enum Direction {
    RIGHT = 2, //0 아니고 2로
    LEFT = 3,
  }

  Direction.LEFT;
}
{
  // 조건부 타입 (삼항 연산자와 비슷함)
  // T extends U ? X : Y
  type IsString<T> = T extends string ? "Yes" : "No";
  type A = IsString<string>; // "Yes"
  type B = IsString<number>; // "No"
}
{
  type MyType = "a" | "b" | "c";
  type Result = Exclude<MyType, "b">; // "a" | "c"
  // 왜 이런 결과가 나왔냐면
}
{
  
}
