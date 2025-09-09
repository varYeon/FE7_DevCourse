// 타입 오퍼레이터
// 연습문제

{
  // 1. void *
  // return X
  const printValue = (value: string | number): void => {
    // if (typeof value === "string") console.log("value");
    // if (typeof value === "number") console.log(value);
    console.log(value);
  };

  printValue("Hello"); // "Hello" 출력
  printValue(42); // 42 출력
}

{
  // 2. *
  const doubleOrLength = (value: string | number): number => {
    // if (typeof value === "string") return value.length;
    // if (typeof value === "number") return value * 2;
    // 아 뭐지 왜 에러나지, undefined 처리?
    return typeof value === "string" ? value.length : value * 2;
  };

  console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}

{
  // 3. **
  const mergeObjects = (
    obj1: { name: string; age: number },
    obj2: { jobTitle: string; salary: number }
  ): { name: string; age: number } & { jobTitle: string; salary: number } => {
    return { ...obj1, ...obj2 };
  };

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
  // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}

{
  // 4. *
  const getFirstElement = (
    arr: number[] | string[]
  ): number | string | undefined => {
    return arr[0];
    // 타입별로 출력값이 다르지 않음
  };

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined
}

{
  // 5. *
  const isEqual = (
    value1: number | string,
    value2: number | string
  ): boolean => {
    // if(typeof value1 === "number" && typeof value2 === "number" && value1 === value2) return true;
    // if(typeof value1 === "string" && typeof value2 === "string" && value1 === value2) return true;
    // else return false;
    return value1 === value2;
    // 타입이 달라도 출력결과가 같으므로 typeof로 구분하지 않음
  };

  console.log(isEqual(10, 10)); // true
  console.log(isEqual("hello", "world")); // false
  console.log(isEqual(5, "5")); // false
}

{
  // 6. **
  const updateAddress = (
    person: { name: string; age: number },
    address?: string
  ): { name: string; age: number; address?: string } => {
    if (address) {
      return { ...person, address };
    }
    return person;
  };

  const updatedPerson = updateAddress(
    { name: "Jane", age: 28 },
    "123 Maple St"
  );
  console.log(updatedPerson);
  // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

  const updatedPersonWithoutAddress = updateAddress({ name: "John", age: 22 });
  console.log(updatedPersonWithoutAddress);
  // 예상 출력: { name: "John", age: 22 }
}
//////////////////////////////////////////
{
  // 7.
  const maxValue = (
    a: number | string,
    b: number | string
  ): number | string => {
    if (typeof a === "string" && typeof b === "string")
      return a.length > b.length ? a : b;
    return a > b ? a : b;
  };

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue("apple", "banana")); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue("cat", "dog")); // "dog"
}

{
  // 8. 오버로딩
  // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
  function getValue(value: number): string;
  function getValue(value: string): string;
  function getValue(value: string | number): string {
    return value.toString();
  }

  console.log(getValue(123)); // "123"
  console.log(getValue("abc")); // "abc"
}

{
  // 9.
  const createContact = (
    person: { name: string; age: number },
    contact: { email: string }
  ): { name: string; age: number } & { email: string } => {
    return { ...person, ...contact };
  };

  const person = { name: "Alice", age: 28 };
  const contact = { email: "alice@example.com" };

  const personWithContact = createContact(person, contact);
  console.log(personWithContact);
  // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}

{
  // 10.
  const getAge = (age: number | string): number => {
    if (typeof age === "string") return parseInt(age);
    return age;
  };

  console.log(getAge("25")); // 25
  console.log(getAge(30)); // 30
  console.log(getAge("abc")); // NaN
}
