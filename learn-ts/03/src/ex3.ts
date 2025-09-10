// 인터페이스
// 연습문제
// 숙제, 내일 풀이

{
  // 1.
  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: "sooyeon",
    age: 25,
  };
  // 타입 명시를 하지 않았을 때, 오류가 안 남 -> 구조적 타이핑 때문?
}

{
  // 2. 메소드가 포함된 인터페이스 *
  interface Car {
    brand: string;
    model: string;
    start(speed: number): void;
  }

  const car: Car = {
    brand: "kia",
    model: "K8",
    start: function (speed) {
      console.log(`${this.brand}의 ${this.model}입니다. speed: ${speed}`);
    },
  };

  car.start(100);
}

{
  // 3. 선택적 속성 사용
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }

  const employee: Employee = {
    name: "sy",
    position: "leader",
  };
}

{
  // 4. 배열을 포함한 인터페이스
  interface Team {
    name: string;
    members: string[];
  }

  const team: Team = {
    name: "A",
    members: ["kim", "lee", "byeon"],
  };
}

{
  // 5. 상속
  interface Animal {
    name: string;
    age: number;
  }
  interface Dog extends Animal {
    breed: string;
  }

  const dog: Dog = {
    name: "Rick",
    age: 5,
    breed: "chihuahua",
  };
}

{
  // 6. 인터페이스에서 메소드 정의 *
  interface Person {
    name: string;
    age: number;
    greet(): void;
  }
  const person: Person = {
    name: "sy",
    age: 25,
    greet: function (this: Person) {
      // this: Person 생략 가능, 잘 안 쓰는 문법
      console.log(`Hello, my name is ${this.name}`);
    },
  };
}

{
  // 7. 다형성 *
  interface Shape {
    area(): number;
  }
  interface Circle extends Shape {
    radius: number;
  }
  interface Rectangle extends Shape {
    width: number;
    height: number;
  }

  const circle: Circle = {
    radius: 5,
    area: function () {
      return this.radius * this.radius * Math.PI;
    },
  };

  const rectangle: Rectangle = {
    width: 5,
    height: 10,
    area: function () {
      return this.width * this.height;
    },
  };

  console.log(circle.area());
  console.log(rectangle.area());
}

{
  // 8. 다중 인터페이스
  interface Person {
    name: string;
    age: number;
  }

  interface Address {
    street: number;
    city: string;
    zipcode: number;
  }

  //type PersonalAddress = Person & Address;
  interface PersonalAddress extends Person, Address {}

  const personAddress: PersonalAddress = {
    name: "sy",
    age: 25,
    street: 1,
    city: "YoungIn",
    zipcode: 12345,
  };
}

{
  // 9. 인덱스 시그니처 사용 *
  interface Dictionary {
    [key: string]: string;
  }

  const dictionary: Dictionary = {
    Hi: "hello",
  };
}

{
  // 10. **
  interface Operation {
    (a: number, b: number): number;
  }

  const add: Operation = (a, b) => a + b;
  const subtract: Operation = (a, b) => a - b;
}
