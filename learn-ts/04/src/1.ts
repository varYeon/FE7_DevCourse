// 작은 개념들
{
  /* 1. unknown */

  // any - 아무 값이나 대입, 사용할 수 있어 타입 검사를 우회하는 특수한 타입
  // 사용하지 않는 것이 좋음, 배포 안 될 수도 있음 / 당장 어떤 데이터타입을 지정해야할지 모를 때는 임시로 사용 권장 (TODO 주석 함께 사용)

  // unknown - 알 수 없는 타입 (안전한 any, 유연한 unknown)

  // 차이점 ::
  let x: any;
  x = 10.12;
  console.log(x.toFixed(1)); // 자동완성 안 되지만 사용은 가능, js취급, 타입검사 안 하고 무시 실행
  // unkown은 아님, type 검증 과정 필요 -> 타입 가드를 사용해야 함, 타입 좁히기 필요
  let y: unknown;
  y = 10.12;

  if (typeof y === "number") {
    console.log(y.toFixed(2)); // 자동완성도 됨
  }

  // any << unknown 사용 권장
}
{
  /* 2. 타입 단언 */
  // as, <>
  // 개발자가 타입스크립트 컴파일러보다 타입을 더 잘 알고 있을 때 사용
  // 타입을 내가 정의/보장/단언하겠다.
  let x: unknown;
  x = 10.12; // 나는 number가 들어갈 것을 알고 있음

  (x as number).toFixed(1); // x는 이제부터 number 이라고 믿게 함
  (<number>x).toFixed(1); // 리액트 안씀, JSX문법과 충돌, 이 방법도 있다는 것을 알아둠
  // <number>x 이거 내일 성취도 평가에 나옴

  // 장점 :: 타입을 내(개발자)가 원하는대로 지정 가능
  // 단점 :: 책임도 내(개발자) 것 (컴파일 에러는 안 나고, 런타임 에러가 남)

  const el = document.querySelector("#user") as Element; // const el: Element | null 이므로 error 발생 -> 타입 단언 사용
  el.addEventListener("click", function () {});
}
