// 제네릭 (중요) -> 어려운거 마즘
// 제니릭은 타입을 미리 지정하지 않고, 사용하는 시점에 타입을 정의해서 쓸 수 있는 문법
// 장점 -> 코드의 재사용성, 다양한 타입에 대해 하나의 함수나 클래스를 작성할 수 있게 도와줍니다
{
  function getFirstElement(
    arr: number[] | string[] | boolean[] | [number, string]
  ): number | string | boolean {
    return arr[0];
  }

  console.log(getFirstElement([1, 2, 3])); //1
  console.log(getFirstElement(["a", "b", "c"])); // "a" 를 출력 하고 싶다면 함수를 따로 만들던지 / 유니언으로 묶는다
  // 함수 만들기 -> 늘어날 수록 코드 낭비, 유지보수하기 나빠짐
  // 유니언 타입을 선호 (보통) -> but, 가독성 나쁨 (길어질수록)
  console.log(getFirstElement([true, false, true])); //true
  console.log(getFirstElement([1, "a"])); //1

  // 암튼 함수든 유니언이든 불편함이 존재 -> 극복 -> 제네릭 사용
}
{
  /* 함수의 제네릭 */
  // 사용 ::
  // 함수의 선언부 앞에 <> -> 그 안에 변수타입 - 대문자, T(Type)/K(Key)/V(Value)/E(Element)/U(Another Type)
  // 호출 시에도 <> 필요
  // ! -> null(undefined 포함) 아님 보장 연산자 ( or : T | undefined 사용 )
  /* 이니셜 의미 */
  // T(Type) - 가장 일반적인 타입 변수
  // K(Key) - 객체의 키
  // V(Value) - 객체의 값
  // E(Element) - 배열의 요소나 이벤트
  // U(Another Type) - T 이외의 만만하면 U
  function getFirstElement<T>(arr: T[]): T {
    return arr[0]!;
  }

  console.log(getFirstElement<number>([1, 2, 3]));
  console.log(getFirstElement<string>(["a", "b", "c"]));
  console.log(getFirstElement<boolean>([true, false, true]));
  console.log(getFirstElement<number | string>([1, "a"]));

  // 작동 ::
  // 치환 -> 어떤 변수가 값으로 변경되는 것
  // 호출 시 <> 안의 타입이 선언부의 <이니셜> 로 치환됨 -> 호출 마다 이니셜 값이 달라짐
  // 그렇게 받은 T 값이 'arr: T[]): T'안의 T에 들어감
  // ex. function getFirstElement<number>(arr: number[]): number{} 가 됨
  // 얘가 string, boolean 등등 다 호출될 때마다 적용되니까, 유니온 타입과 같은 기능이 되어버리는 것

  // 어려운 이유 :: 막상 쓰려고 하면 안 떠올라서, 없어도 문제가 풀리니까
  // ㄴ 쓰면 코드 길이가 확 짧아지고, 재사용성 수직 상승

  // 제네릭은 함수 오버로드 시그니처도 안 써도 되버림 (?) -> 같이 써도 되긴 하는데 충돌 발생해서 권장 x
}
{
  // example ::
  // 제네릭도 타입 추론이 됨 -> 호출부 <> 생략 가능
  // 권장 -> 타입 명시가 필요하지 않으면, 타입 추론을 활용 (가독성 측면)
  function identity<T>(value: T): T {
    return value;
  }

  const num = identity(42);
  const str = identity("A");
  const bool = identity(true);
}
{
  // example ::
  function logArray<T>(arr: T[]): void {
    arr.forEach((value) => console.log(value));
  }

  logArray([1, 2, 3]);
  logArray(["a", "b", "c"]);
}
{
  // example ::
  function mergeObj<T, U>(obj1: T, obj2: U): T & U {
    // 둘 다 T를 쓰면 같은 값이 들어가므로, 두 개 이상 사용 가능
    return { ...obj1, ...obj2 };
  }

  const mer1 = mergeObj<{ name: string }, { age: number }>(
    { name: "kim" },
    { age: 20 }
  );
  // 이렇게 객체가 들어가면 혹은 여러 개가 되면, <>에 의해 코드 가독성이 매우 나빠짐 -> 타입 추론 권장 이유
  const mer2 = mergeObj({ name: "kim", age: 20 }, { gender: "male" });
}
// 코드 작성하다가, 제네릭을 사용하는게 코드 가독성을 높여줄 수 있겠다는 것을 스스로 깨달을 때까지 ts 훈련
{
  // 제네릭은 포괄적인 타입으로 string, bol-, null 까지 들어감 -> 산술 불가 요소 포함 -> 에러 발생
  // 타입 제약 ::
  // 제네릭의 타입을 제한하는 문법
  // T extends number -> number 일 때만 치환 가능하게 해라는 의미
  function sumArr<T extends number>(arr: T[]): number {
    return arr.reduce((acc, cur) => acc + cur, 0);
  } // 이 예제로는 제네릭의 유연성을 느낄 수 업슴, 타입 제약의 이해 정도로만 볼 것

  sumArr([1, 2, 3]);
}
{
  // example ::
  function returnLength<T extends { length: number }>(arr: T[]): number {
    return arr.length;
  }
  returnLength(["a", "b", "c"]);
}
{
  // example :: 타입 제약
  function logKey<T extends { name: string; age: number }>(person: T): void {
    console.log(`${person.name},${person.age}`);
  }
  logKey({ name: "kim", age: 20 }); // 최소 name, age가 포함되어야 함 :: 이라는 제약 가능 (보장 가능)
  logKey({ name: "kim", age: 20, gender: "male" }); // 그래서 이건 가능
  //logKey({name:"kim", gender:"male"}); // 이건 불가능, 최소한의 것이 보장x
}
{
  // 인터페이스 제네릭 ::
  // 타입 추론 불가능
  // interface Box {
  //   value : string | number;
  //   getValue(): string | number;
  // }
  interface Box<T> {
    value: T;
    getValue(): T;
  }

  const stringBox: Box<string> = {
    value: "kim",
    getValue() {
      return this.value;
    },
  };

  const numberBox: Box<number> = {
    value: 10,
    getValue() {
      return this.value;
    },
  };
  // 타입 별칭 에서도 사용 가능
  // class 에서도 사용 가능
}
