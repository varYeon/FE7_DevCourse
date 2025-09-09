// 자잘한 것들

{
  // 1. 구조적 타이핑
  // 타입의 이름이나 선언이 아니라, 내부의 구조가 같으면 같은 타입으로 간주하는 방식
  const point: { x: number; y: number } = { x: 10, y: 22 };
  const position: { x: number; y: number; z?: number } = point;
  // 객체 타입을 다룰 때 흔하개 보임, 함수에서도 잘 쓰이고

  const fn1: (a: number, b: number) => number = (a, b) => a + b;
  const fn2: (x: number, y: number) => number = fn1;
  // 객체는 속성 이름과 타입이 일치하면 되고  함수는 순서와 타입이 일치하면 된다
  // ㄴ 객체에서는 point든 position z를 추가해도 받을 수 있지만, 함수는 불가능함
}
{
  // 2. readonly (ts 한정 property)
  const user: {
    readonly name: string; // 읽기 전용 속성이 됨
    age: number;
  } = {
    name: "kim",
    age: 20,
  };

  //user.name = "park"; // read-only, 수정 불가능
  user.age = 30;
  // 객체 뿐 아니라 배열, 튜플에서도 사용 가능
  const numArr: readonly number[] = [1, 2, 3];
  const mixArr: readonly [number, string] = [10, "A"];
  //mixArr.push('B'); // 수정 불가능
  // 배열의 길이가 변화하거나 추가,수정 하지 않아야 할 때 조건문 처리보다 간단히 가능
  // ㄴ (readonly를 쓰면 배열 길이가 변하거나 기존 요소를 바꾸는 실수를 방지 가능)

  // 옵셔널 파라미터와 함께 사용 가능
}
{
  // 3. 인덱스 시그니처
  // 객체의 키와 값의 타입 패턴을 통해 타입을 정의하는 문법
  // 객체의 키를 정의
  const user: {
    [key: string]: string;
  } = {
    name: "kim",
  };

  // 단점 : 정학한 타입 추론 불가능, user. 까지만 치면 가진 타입 미리보기가 되는데 안 되는걸 보고 확인 가능, 포괄적이다보니 안 보임
  // js 특성상 객체의 key는 100% 문자열임, 그렇게 설계 되어 있음

  // 단점들이 있어 지양하려고 하지만 편리해서 실무에서 종종 쓰이는 곳이 꽤 있다
  // 왜 쓰지..? *
}
{
  // 4. 함수 -> 일급 객체
  // 객체 형식으로 타입 지정 가능, 근데 굳이 안 씀 (직관적이지 않아서)
  const add1: {
    // *
    (a: number, b: number): number;
  } = (a, b) => a + b;

  const add2: (a: number, b: number) => number = (a, b) => a + b;
  // 둘이 같은거
}
