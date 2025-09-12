// 함수 타입
// 연습문제

{
  // 1.
  /* 
  const add = function (a: number,b: number): number{
  return a + b;
  } 
  */
  /*
  const add = (a: number, b: number): number => {
    return a + b;
  };
  */
  const add = (a: number, b: number): number => a + b;

  const result = add(10, 5);
  console.log(result); // 15
}

{
  // 2. void *
  const greet = function (name: string): string {
    return `Hello, ${name}`;
  };

  const greeting = greet("Alice");
  console.log(greeting); // "Hello, Alice!"
}
{
  // 2. 다시
  const greet = function (name: string): void {
    console.log(`Hello, ${name}`);
  };

  const greeting = greet("Alice");
  //console.log(greeting); // "Hello, Alice!"
}

{
  // 3. 스프레드 연산자 *
  const sumAll = function (...numArr: number[]): number {
    return numArr.reduce((acc, cur) => acc + cur, 0);
  };

  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10
}

{
  // 4.  기본값 *
  const sum = function (a: number, b = 0): number {
    return a + b;
  };

  const result = sum(5);
  console.log(result); // 5
}

{
  // 5.
  const multiply = (a: number, b: number): number => {
    return a * b;
  };

  const product = multiply(4, 5);
  console.log(product); // 20
}

{
  // 6.
  const concatStringAndNumber = (a: string, b: number): string => {
    //return a + b;
    return `${a}${b}`;
  };

  const result = concatStringAndNumber("Hello", 10);
  console.log(result); // "Hello10"
}

{
  // 7. 옵셔널 파라미터 *
  // 기본값이 들어가면 옵셔널 파라미터를 사용할 수 없음
  const greet = (a: string, b?: string): string => {
    //return (b || "Welcome") + ", " + a + "!";
    // ``로 바꾸어 보기
    return `${b || `Welcome`}, ${a}!`;
  };

  const greeting1 = greet("Alice", "Hello");
  const greeting2 = greet("Bob");
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"
}

{
  // 8. **
  const findMax = (numArr: number[]): number => {
    return Math.max(...numArr); // 전개해서 사용해야함
  };

  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40
}

{
  // 9.
  const double = (a: number): number => {
    return a * 2;
  };

  const doubled = double(10);
  console.log(doubled); // 20
}

{
  // 10. 함수 오버로딩 **
  function getInfo(param: number): string;
  function getInfo(param: string): string;
  function getInfo(param: string | number): string {
    if (typeof param === "string") return `Name: ${param}`;
    else return `age: ${param}`;
  }

  const info1 = getInfo("Alice");
  const info2 = getInfo(30);
  console.log(info1);
  console.log(info2);
}
