import ts = require("typescript");

{
  // 함수에 타입을 지정하는 방법
  // : 함수의 매개 변수와 반환 값의 타입을 지정하는 것 (오늘의 핵심!)

  // 1. 기본 형태
  // 함수 선언식
  // function(n1:매개변수타입):반환값의 타입 {}
  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }
  sum(10, 20);

  function concat(n1: string, n2: string): string {
    return n1 + n2;
  }
  concat("hello", "sy");

  // 2. 함수의 타입 추론
  // 반환값 정도 추론 가능 -> 명시해도 되고, 생략해도 됨 (일관성!)
  function sum2(n1: number, n2: number) {
    return n1 + n2; // number 당연히.
  }
  sum2(10, 20);

  // 3. 특수 type
  // 3.1 void
  // 함수의 반환값의 타입을 지정할 때만 사용
  // 아무것도 반환하지 않는 함수의 타입 지정할 때 사용
  function printValue(value: string): void {
    console.log(value);
    // return undefined 생략된 것
  }
  printValue("hello");

  // 3.2 never *
  // 절대로 값이 반환될 수 없는 상황에서 사용
  // 할 수 있는데 안 한 것과 할 수 없다는 점에서 void와 차이가 있음
  function throwError(msg: string): never {
    throw new Error(msg);
  }

  // 4. 다른 형태의 함수에서의 방법
  // 함수 타입 지정이 까다로운 이유
  // 함수 표현 방법이 3가지 있음 -> 각각의 방법마다 조금씩 다름

  // 4.1 함수 표현식
  // (1) - 함수 표현식의 타입을 지정하는 방법
  const suma = function sum(n1: number, n2: number): number {
    return n1 + n2;
  };

  // (2) - 변수에 함수 타입을 지정하는 방법 *
  // (n1: number, n2: number) => number
  const sumb: (n1: number, n2: number) => number = function sum(n1, n2) {
    return n1 + n2;
  };

  // (3) - 둘 다 사용 (굳이 안 쓰는)
  const sumc: (n1: number, n2: number) => number = function sum(
    n1: number,
    n2: number
  ) {
    return n1 + n2;
  };

  // 개인이나 조직, 회사의 룰을 따르면 됨 (일관성!)

  // 4.2 화살표 함수
  // (1) - 함수 표현식의 타입을 지정하는 방법
  const sumA = (n1: number, n2: number): number => {
    return n1 + n2;
  };

  // (2) - 변수에 함수 타입을 지정하는 방법
  const sumB: (n1: number, n2: number) => number = (n1, n2) => {
    return n1 + n2;
  };
  // const sumB: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  // 화살표 함수를 이렇게 쓰는게 가독성이 좀 더 좋다, 리턴을 쓰지 않음

  // (3) - 둘 다 사용 (굳이 안 쓰는)
  const sumC: (n1: number, n2: number) => number = (
    n1: number,
    n2: number
  ): number => n1 + n2;

  // 5. 옵셔널 파라미터 ('?')
  function sum22(n1: number, n2?: number): number {
    return n1 + (n2 || 0);
  }
  sum22(10); // 타입스크립트에서는 매개 변수를 일부만 넘기는게 불가능하다
  // 자바스크립트 에서는 10 + undefined = 10 이렇게 나왔었는데 타입스크립트 에서는 안 됨
  // 되게 하려면 함수 부분을 좀 바꿔야 함

  // 5.1 ? 사용 -> n2: number | undefined의 의미 -> but, return 값에 문제가 생긴다
  // ㄴ 지금처럼 값이 할당되지 않을 수도 있으니까 undefined
  // 5.2 n2 || 0

  // 옵셔널은 첫번째거에만은 지정할 수 없음, 순서대로 지정되기 때문
  // n1만 지정은 불가, n2도 같이 지정한다면 가능

  // 6. 매개변수가 콜백함수일 때 **
  // function log(msg: string) {
  // console.log(msg);
  //}
  function printValue2(callback: (msg: string) => void): void {
    callback("Hello");
  }

  printValue2((msg: string) => {
    console.log(msg);
  }); // 왜 안 되징...

  // 반환값이 함수일 때 타입도 함수로 적어야 함 *
  function createMuliplier(factor: number): (num: number) => number {
    return (num) => num * factor;
  }

  const multi = createMuliplier(2);
  console.log(multi(5));

  // 연습 : 화살표 함수로 바꿔보기 *
  const createMuliplierArrow: (factor: number) => (num: number) => number =
    (factor) => (num) =>
      num * factor;
  // 타입 지정 부분 :: (factor: number) => (num: number) => number = (factor)
  // 화살표 함수 1 :: (factor) => {(num) => num * factor}, factor를 받고 뒤를 구현
  // 화살표 함수 2 :: (num) => num * factor, num을 받고 뒤를 구현
  // 화살표 함수 두 개가 중첩된 구조
}
{
  // 7. 나머지 매개 변수 *
  function sum(...numArr: number[]): number {
    return numArr.reduce((acc, cur) => acc + cur, 0);
  }
  sum(1, 2, 3, 4, 5);
}
{
  // 8. 함수 오버로딩 (실무에서 자주 씀)
  function sum(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number")
      return a + b; // 타입 가드
    else return `${a}${b}`; // a + b
    // number+number, number+string, string+string은 전부 string 이므로 문자열 처리해야 오류가 사라짐
    // 리턴값을 문자열로 하지 않는다면 if문으로 모든 경우의 수를 적어야 함
  }
  // 문자열 처리의 문제점은, 아래처럼 인자로 숫자만 썼는데도 num: string | number 타입이 됨 (타입가드의 문제?)
  // 그 말은 어느 한쪽의 메서드 활용이 불가능
  const num = sum(10, 30);
  //console.log(num.toFixed(2)); // 불가능

  // 그래서 함수 오버로딩 방법을 제공 (JS에는 없는 문법)

  // 오버로드 시그니처를 활용해서 매개변수와 반환값의 경우의 수를 좁히는 방법
  // 선언부분만 따서 적고 경우의 수를 적음
  function sum2(a: string, b: string): string;
  function sum2(a: string, b: number): string;
  function sum2(a: number, b: string): string;
  // 가독성 등을 이유로 쓸 일은 별로 없겠지만 이런 식으로 띄워서 쓰는 것도 가능
  function sum2(a: number, b: number): number;
  function sum2(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") return a + b;
    else return `${a}${b}`; // a + b
  }
  // 장점
  const num2 = sum2(10, 20);
  console.log(num2.toFixed(2)); //가능

  // 함수 선언문에서만 가능한 방법
  // 모든 경우의 수를 다 쓸 필요는 없음, 나한테 필요한 것만 선택해서 적으면 됨
  // ㄴ 대신 명시하지 않은 오버로드를 쓰려고 하면 에러가 남

  // 추가 이해 *
  // 위에건 타입 가드만 쓴 것, 아래 것은 오버로드 시그니처를 같이 쓴 것
  // 무슨 차이? - 오버로드 쓰면 함수 호출하는 순간 타입이 확실해져서 경우의 수를 좁혀준다는 것
  // 오버로드를 안 쓴게 타입을 좁히지 못한다는거, 예시를 보면 x는 number, y는 string 이지만 타입은 좁혀지지 않았음
  // 그걸로 인해서 메서드를 적용하는거 등의 문제가. 생길 수도 있음, 타입을 확실히 하는 것이 좋음
  const x = sum(1, 2); // 타입: number | string
  const y = sum("a", 2); // 타입: number | string
  // 두 개가 어떻게 사용 되는지? -> 같이 많이 쓰는거 같음
  // 오버로드를 통해서 타입 확정으로 컴파일 과정에서 오류를 줄이고,
  // 타입가드로 런타임 시에 경우에 따른 코드를 확실히 나눠서 안정 시키는 느낌?
}
