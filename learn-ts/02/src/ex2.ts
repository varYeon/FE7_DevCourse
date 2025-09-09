// 함수 타입
// 연습문제+

{
  // 1. **
  const sumAllNumbers = (...arrays: number[][]): number[] => {
    return arrays.map((arr) => arr.reduce((acc, cur) => acc + cur, 0));
  };

  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]

  // 1. ...arrays
  // 2. number[][]
  // 3. map 안에 reduce 중첩
}

{
  // 2. *
  // const doubleValue = function(x: number | string):number {
  //   if(typeof x === "number") return x * 2;
  //   else return x.length * 2;
  // }
  // 다른 버전 (변수에 타입 지정)
  const doubleValue: (x: number | string) => number = function (x) {
    if (typeof x === "number") return x * 2;
    else return x.length * 2;
  };

  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}

{
  // 3. ** 매개변수로 배열을 받는게 어려움
  const multiplyArrays = (numArr1: number[], numArr2: number[]): number[] => {
    const minLength = Math.min(numArr1.length, numArr2.length);
    return Array.from({ length: minLength }, (_, index) => {
      const a = numArr1[index];
      const b = numArr2[index];
      if (a !== undefined && b !== undefined) {
        return a * b;
      }
      return 0;
    });
  };

  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]

  const result2 = multiplyArrays([1, 2], [4, 5, 6]);
  console.log(result2); // [4, 10]
}

{
  // 4. **
  const intersection = (numArr1: number[], numArr2: number[]): number[] => {
    return numArr1.filter((num) => numArr2.includes(num));
  };

  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}

{
  // 5. ** 매개변수가 객체
  const formatInfo = (obj: { name?: string; age?: number }): string => {
    if (obj.name) {
      return `Name: ${obj.name}`;
    }
    if (obj.age) {
      return `Age: ${obj.age}`;
    }
    return "Invalid Types";
  };

  const info = formatInfo({ name: "Alice" });
  console.log(info); // "Name: Alice"
}
/////////////////////////////////////////
{
  // 6.
  const combineStrings = (str1: string, str2: string): string =>
    `${str1}${str2}`;

  const combined = combineStrings("Hello", "World");
  console.log(combined); // "HelloWorld"
}

{
  // 7.
  const squareArray = (numArr: number[]): number[] => {
    return numArr.map((num) => num * num);
  };

  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}

{
  // 8.
  // 함수 정의
  const addStringAndNumber = (value1: string, value2: number): string =>
    `${value1}${value2}`;

  // 함수 호출
  const result = addStringAndNumber("The number is ", 10);
  console.log(result); // "The number is 10"
}

{
  // 9.
  const compareValues = (value1: number, value2: string): string => {
    return value1 > value2.length ? "Number is larger" : "string is larger";
  };
  // 좀 더 예외처리를 정확히 하고 싶다면 조건문 추가

  const result = compareValues(10, "Hello");
  console.log(result); // "Number is larger"
}

{
  // 10. 5번의 에러와 같은 양상
  const checkValue = (value: boolean | string | number): string => {
    if (typeof value === "boolean") {
      return `It's a boolean`;
    }
    if (typeof value === "string") {
      return "It's a string";
    }
    if (typeof value === "number") {
      return "It's a number";
    }

    return "Invalid Types";
    //throw new Error("Invalid Types");

    // 적지만 if문을 안 타는 경우가 있을 수 있다는 것을 컴파일러가 감지, 글서 반환값 타입에 오류 발생
    // ㄴ 즉 string을 안 반환하는 경우가 조금이라도 있을 수도 있다\
    // ㄴ 해결 1. else if 사용 / 해결 2. 마지막에 throw new Error 작성 / 해결 3. : 그 윗줄
  };

  const result = checkValue(true);
  console.log(result);
}
