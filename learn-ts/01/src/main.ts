// '변수: 타입'

// 1. 기본 자료형
// 1.1 문자열 -> string
// 1.2 숫자 -> number
// 1.3 논리 -> boolearn
// 1.4 undefined -> undefined
// 1.5 null -> null
// 1.6 symbol -> symbol
// 1.7 Bigint -> bigint
{
  const str: string = "hello";
  const num: number = 2;
  const bool: boolean = true;
  const undi: undefined = undefined;
  const nul: null = null;
  const sym: symbol = Symbol("a");
  const big: bigint = 100n;

  console.log(typeof str);
  console.log(typeof nul); // 예외적, object
}
{
  // 장점
  //변수 안에 어떤 데이터를 넣을지 사전적 판단이 가능해짐
  let str: string = "hello";
  str = "a";
  //str = 10; // 불가능
  //str = null; // 내부적으로 할당을 되겠지만 실행은 안 됨 (컴파일 단계에서 에러 발생)
  console.log(str);
}
// 타입을 명시하면 바꿀 수 없다
// let으로 재할당을 할 때도 타입이 다르면 불가능하다

// 2. 참조 자료형
// 2.1 배열
// 2.1.1 []
// 2.2.2 Array<> (제네릭)
{
  const arr: [] = [];
  //arr.push(10); // 에러, 빈배열 지정, 추가 할당 불가
  const arr2: Array<never> = [];
  //arr.push(15); // 에러, never 지정, 추가 할당 불가

  // 숫자형 요소가 들어있는 배열
  const arr3: number[] = [1, 2, 3];
  arr3.push(10);
  //arr3.push("a"); // 에러
  const arr4: Array<number> = [1, 2, 3];

  // 숫자와 문자가 같이 있을 때
  // 튜플(tuple) : 배열 요소 안에 데이터 타입이 섞여 있음
  const arr5: [number, string] = [1, "a"];
  //제네릭은 불가능

  // 배열안에 배열 중첩
  const matrix: number[][] = [
    [1, 2, 3],
    [1, 2, 3],
  ];
  // 실무에서 잘 쓰지는 않음 -> 가독성 하락, 이런게 있구나
  const matrix2: Array<Array<number>> = [
    [1, 2, 3],
    [1, 2, 3],
  ];
  const matrix3: [number[], string[], boolean[]] = [
    [1, 2, 3],
    ["a", "b", "c"],
    [true, false],
  ];

  // 배열 안의 배열 안의 배열
  const blocks: string[][][] = [
    //문자열 삼중배열, 직역 가능한 형태로 타입 지정
    [["a", "b"], ["c"]],
    [["d", "e"], ["f"]],
  ];
  const blocks2: [[string[], number[]], [string[], number[]]] = [
    [["a", "b"], [1]],
    [["d", "e"], [2]],
  ];
}

// 2.2 객체
{
  const obj: {} = {}; // 이건 틀린 문법 // Record<string,never>
  const user: {
    // 아래 넣은 객체를 타입 지정 부분에 복붙하고 값만 타입으로 바꿔주면 됨
    name: string; // ;도 되고 ,도 됨 (자동수정 되버리긴 함)
    gender: string; // 굳이 필요 없지만(가독성 하락) 순서 무관 (컴파일 언어기 때문)
    age: number;
    fruits: string[];
    adress: {
      zipcode: number;
      details: [string, string, number];
    };
  } = {
    name: "kim",
    age: 20,
    gender: "male",
    fruits: ["apple", "banana"],
    adress: {
      zipcode: 11111,
      details: ["서울", "관악", 11],
    },
  };

  // 배열 안에 객체가 있다면
  const members: { id: number; name: string }[] = [
    { id: 1, name: "kim" },
    { id: 2, name: "lee" },
  ];

  //
  const project: {
    id: string;
    members: { id: number; name: string }[];
  } = {
    id: "p1",
    members,
  };
}

// 2.3 함수 (나중에 자세히 살펴봄)
