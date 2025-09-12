// 제네릭
// 연습문제

{
  // 1.
  function getFirst<T>(arr: T[]): T {
    return arr[0]!;
  }
  // 이 쪽이 더 안전
  /*
    function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
  }
  */

  console.log(getFirst([1, 2, 3])); // 1
  console.log(getFirst(["a", "2", "3"]));
  console.log(getFirst([true, false, true]));
  console.log(getFirst(["1", false, true]));
}
{
  // 2.
  function getLength<T>(arr: T[]): number {
    return arr.length;
  }

  console.log(getLength([1, 2, 3])); // 3
  console.log(getLength(["1", "2", "3", "4", "5"]));
  console.log(getLength([1, "1", false, true]));
}
{
  // 3.
  function getLast<T>(arr: T[]): T {
    return arr[arr.length - 1]!;
  }

  console.log(getLast([1, 2, 3])); // 3
  console.log(getLast(["1", "2", "3", "4", "5"]));
  console.log(getLast([1, "1", false, true]));
}
{
  // 4. *
  // 왜 필요하지? "숫자"값을 더할 수 있도록 하는건데 -> 숫자만 넣도록 제한을 걸라는 의미 (타입제약)
  function add<T extends number>(a: T, b: T): number {
    return a + b;
  }

  console.log(add(2, 3)); // 5
}
{
  // 5. **
  // 객체에서 특정 키의 값을 반환하는 함수입니다.
  // 제네릭을 사용하여 다양한 객체에 대해 특정 키의 값을 안전하게 구할 수 있도록 개선하세요.
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue({ name: "Alice" }, "name")); // "Alice"
  console.log(getValue({ age: 15 }, "age")); //15
  console.log(getValue({ gender: "Female" }, "gender")); //Female
}
{
  // 6.
  function isEqual<T>(a: T, b: T): boolean {
    return a === b;
  }

  console.log(isEqual(2, 2)); // true
  console.log(isEqual("Alice", "Alice"));
  console.log(isEqual("Alice", "Rick")); //false
}
{
  // 7. * 타입제약
  function square<T extends number>(arr: T[]): number[] {
    return arr.map((num) => num * num);
  }

  console.log(square([1, 2, 3])); // [1, 4, 9]
  // 굳이 바꿀 메리트는 없지만 연습하기 위한 문제!
}
{
  // 8. *
  function getFirstAndLast<T>(arr: T[]): (T | undefined)[] {
    return [arr[0], arr[arr.length - 1]];
  }
  // undefined 처리 관련 의문

  console.log(getFirstAndLast([1, 2, 3])); // [1, 3]
  console.log(getFirstAndLast(["Alice", "Rick", "Kim"]));
  console.log(getFirstAndLast([true, false, true]));
}
{
  // 9. *
  function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

  console.log(mergeObjects({ name: "Alice" }, { age: 25 })); // { name: "Alice", age: 25 }
}
{
  // 10.
  function getUnique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
  }

  console.log(getUnique([1, 2, 2, 3])); // [1, 2, 3]
  console.log(getUnique(["Alice", "Rick", "Rick", "Kim"])); // [ 'Alice', 'Rick', 'Kim' ]
  console.log(getUnique([true, false, true])); //[ true, false ]
}
