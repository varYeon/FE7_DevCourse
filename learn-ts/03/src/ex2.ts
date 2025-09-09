// 타입 별칭
// 연습문제

{
  // 1. 뭐지... **
  type Person = {
    name: string;
    age: number;
  };
  // 함수 부분 곤란, 그냥 똑같이 생각하자
  // 아 근데 뭐가 이해가 안 되는거지, 위치? 대체되는 부분? 어디가 어떻게 대체
  function getPesonInfo(person: Person): void {
    console.log(person);
  }
  // 화살표로 바꿀 수 있어?
  getPesonInfo({ name: "sy", age: 20 });
}

{
  // 2.
  type Config = {
    host: String;
    port: number;
    ssl: boolean;
  };

  function createConfig(host: String, port: number, ssl: boolean): Config {
    return { host, port, ssl };
  }

  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
  // 3.
  type Rectangle = {
    width: number;
    height: number;
  };

  function calculateArea(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
  }

  console.log(calculateArea({ width: 10, height: 10 }));
}

{
  // 4.
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };

  function calculateAverageGrade(student: Student): number {}
}

{
  // 5.
}

{
  // 6.
}
