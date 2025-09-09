{
  // 1. 타입 오퍼레이터
  // 1.1 유니언 타입 -> | (파이프), ||(OR)과 다름 (의미는 비슷함)
  // 1.1.1 의미 : A 또는 B 타입
  // 기본
  let x: number | string | boolean = 10;
  x = 20;
  x = "a"; // 가능해짐
  x = true;

  // 참조
  const arr1: (string | number)[] = ["A", 10];
  const arr2: [string, number] = ["A", 10]; // 앞서 배운 튜플 방식
  // 차이점과 장단점
  // 유니온 타입은 타입 지정에서 여러 가지 경우의 수 처리가 가능해서 (타입 포괄 지정) 편리
  // 동시에 타입에 대한 정의가 약해지는 단점도 있음, 불분명?
  const first = arr1[0]; //first: string | number | undefined
  // 불분명 하다는 것 :: 꺼내쓸 때 곤란, first에 메서드 쓰려고 할 때 자동완성이 안 되거나 적용이 안 될 수 있음 (타입을 확신하지 못하니까)
  //first.toLowerCase();
  const second = arr1[1];
  const f = arr2[0]; //f: string, 타입 확실
  f.toLowerCase();
  const s = arr2[1];
  s.toFixed(); // 타입이 확실하니까, 자동완성도 잘 되고 문제 없이 잘 실행됨
  // 무엇을 쓸지 결정하는건 개발자의 선택 -> 그게 ts의 어려운 점, 경우의 수를 파악하고 선택하는 능력이 필요함

  // * 타입 가드 (type guard) *
  // 런타임에 실제 검사 결과를 바탕으로 변수의 타입을 조금 더 좁게 추론하도록 타입스크립트에 힌트를 주는 문법
  if (typeof first === "string") {
    console.log(first.toLowerCase());
  }
  // 간단히 하면 if문으로 타입오브 해서 타입 결정하고 이 후의 행위를 하게 함 (타입 가드의 80%는 위와 같은 구조를 같고 있음)
  // 얘는 기본 자료형에서는 필요 없음 ( 둘이 가진 특징이 달라서 그럼** ) -> 4.ts 필기도 참고

  // 1.2 인터섹션 타입 -> & (앰퍼샌트), &&(AND)와 다름 (의미는 비슷함)
  // 1.2.1 의미 : A 타입과 B 타입
  // 기본 타입에서는 사용하지 않음 -> number & string, 숫자이면서 문자인 값은 없으므로
  //let y: number & string = 10;
  const user1: {
    name: string;
  } & {
    age: number;
  } = {
    name: "kim",
    age: 20,
  };
  const user2: {
    name: string;
    age: number;
  } = {
    name: "kim",
    age: 20,
  };
  // 두 개가 같다, 이걸 왜 user1 처럼 쓰는게 필요한지는 나중에 배울 것
}
