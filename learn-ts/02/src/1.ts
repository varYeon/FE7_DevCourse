{
  // 1.
  let str = "hello";
  let num = 2;
  let bool = true;
  let undi = undefined;
  let nul = null;
  let sym = Symbol("a");
  let big = 100n;
  // 왜 에러가 생기지 않는가

  // 타입추론
  // 타입을 명시하지 않아도, 컴파일러가 값, 문맥, 흐름을 보고 적잘한 타입을 자동으로 결정하는 기능
  //str = 9; // 불가능

  // 이 부분은 개발자 스타일
  // 강사님의 경우 기본자료형은 타입추론, 참조자료형은 타입명시
  // 중요한건 일관성 (위 같은 기준이 있어야 함)

  // 2.
  // TODO : 나중에 타입 지정하기 (any는 이런식으로 사용)
  let a; // 선언만, 'any' 타입이 됨, 어떤 것도 할당 가능한 상태
  let b: any;
  // any를 싫어하자
  a = 1;
  a = "hello";
  // 참고) undefined, null 은 자동으로 any 타입이 됨
  let nul2 = null;
  // ㄴ 따라서 얘네는 직접 타입 명시를 해주는 편이 좋다

  // 3.
  // 리터널 타입 (literal type)
  // 타입을 값으로 지정하는 방식
  const str4 = "hello"; // 타입이 'hello', let과 달리 재할당이 안 되기 때문에 자동으로 리터럴 타입 추론
  let str5 = "hello"; // string 타입

  let str2: string = "hello";
  str2 = "a";
  str2 = "b";

  let str3: "hello" = "hello";
  // hello 라는 값만 가질 수 있음
  //str3 = 'a'; // 불가능

  // 정리
  // 타입을 '값'으로 지정할 수 있음, 대신 그 '값'만 가질 수 있어짐
  // const의 경우에 '값'으로 타입 지정하는 부분을 생략하고 '값'을 할당해도, 재할당이 불가능한 특성 때문에 '값'이 타입이 됨

  // 참조자료형에서는 해당되지 않음
  const obj2 = {
    name: "kim",
    age: 20,
  };
}
