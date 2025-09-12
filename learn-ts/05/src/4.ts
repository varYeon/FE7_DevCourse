// 유틸리티 타입 (강의노트 - 예제 / 공식문서 )
// 기존에 존재하는 타입을 변형 / 가공
{
  // 타입스크립트에서 이미 존재하는 타입을 변형하거나 재활용하기 위해서 제공되는 내장 타입 도우미
  // (마치 표준 내장 객체처럼 타입을 다루기 위한 기능이 구현되어져 있는 내장 타입)
  // 제네릭을 기반으로 만들어짐
  // 기존에 존재하는 타입 == 다양한 타입, 정해지지 않음
  // 따라서 포괄적으로 타입을 다루는 제네릭 방식을 기반으로 함
}
{
  // 1. Partial<T> (너무*100 자주 사용)
  // Partial<T>는 주어진 타입 T의 모든 속성을 선택적으로 만드는 유틸리티 타입
  interface User {
    name: string;
    age: number;
    email: string;
  }
  const user1: Partial<User> = { name: "kim", age: 24 };
  // 이메일 인증하기 전가지는 권한이 제한 되는 사이트가 있다고 하면
  // 이메일 인증 전까지는 파샬에 데이터를 선택적으로 만들어 보관 -> 인증 후 User로 이동 하는 등으로 활용

  // 2. Required<T> (너무*100 자주 사용)
  // 1과 반대
  // Required<T>는 주어진 타입 T의 모든 속성을 필수적으로 만듦

  // 3. Readonly<T>
  // 주어진 타입 T의 모든 속성을 읽기 전용으로 만듦

  // 4. Pick<T, K> (은근 자주 사용)
  // 주어진 타입에서 내가 원하는 타입만 추출
  type Guest = Pick<User, "name">;
  // 다른 방법
  // interface Guest {
  //   name: string;
  // }
  // 게스트는 이름 정보만 필요한 사이트 등에 활용

  // 5. Omit<T, K>
  // 4번의 반대, 내가 원하는 타입만 제거

  // 6. Record<K, T>
  // Record<K, T>는 주어진 키 K와 값 T의 타입을 가지는 객체 타입을 생성

  // 7. Exclude<T, U>
  // Exclude<T, U>는 타입 T에서 타입 U를 제외한 나머지 타입을 반환
  // Omit과 비슷해보임 but 제외 대상이 다름
  // omit은 객체만 제외(리터럴 같은 타입은 불가능) / Exclude는 리터럴 가능

  // 8. Extract<T, U>
  // Extract<T, U>는 타입 T에서 U와 겹치는 부분만 추출하여 반환
  // Pick 비슷해보임 but 제외 대상이 다름
  // Pick은 객체만 제외(리터럴 같은 타입은 불가능) / Extract는 리터럴 가능

  // 9. NonNullable<T>
  // NonNullable<T>는 타입 T에서 null과 undefined를 제외한 타입을 반환

  // 10. ReturnType<T>
  // ReturnType<T>는 주어진 함수 타입 T의 반환 타입을 추출
}
