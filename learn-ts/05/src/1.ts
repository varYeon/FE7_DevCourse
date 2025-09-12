// class (클래스)
// js, ts의 차이점
// 1. 타입 시스템 제공
// 2. 접근 제한자 지원 - public, private, protected, readonly
// 3. 추상클래스, 인터페이스와 결합 가능
// 4. 메소드 오버라이딩 시, 오버라이딩 반환 값이 같아야 함
{
  // class
  class Car {
    speed: number; //+
    constructor(speed: number) {
      this.speed = speed;
    }
    start(name: string): string {
      return `${name}, start!`;
    }
  }

  const benz = new Car(100);
  console.log(benz.speed);
  console.log(benz.start("benz"));

  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    introduce(): string {
      return `hello, ${this.name}`;
    }
  }

  const person = new Person("john", 18);
  console.log(person.introduce());
}
{
  // 2.1 public - 기본값, 클래스/내부/외부/상속에서 접근 가능
  // 2.2 private - 클래스 내부에서만 접근 가능
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    private secret(): string {
      return "차 사고 난 적 있음";
    }
    search(): string {
      return this.secret(); // private에 우회 접근 가능
    }
  }

  const car = new Car(100);
  console.log(car.search());
}
{
  class Car {
    private enginOn: boolean = false;
    // 엔진 시작
    start() {
      if (this.enginOn) {
        console.log("Engin is already started");
        return;
      }
      this.enginOn = true;
      console.log("Engine started");
    }
    // 엔진 정지
    stop() {
      if (!this.enginOn) {
        console.log("Engin is already stoped");
        return;
      }
      this.enginOn = false;
      console.log("Engine stoped");
    }
    // 엔진 상태
    inEngineOm(): boolean {
      return this.enginOn;
    }
  }

  const benz = new Car();
  benz.start();
  benz.start();
  benz.stop();
  benz.stop();
  console.log(benz.inEngineOm());
}
{
  // private VS protected
  class Car {
    protected speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  }

  class Benz extends Car {
    //constructor 생략 가능, 부모한테 물려받을 것만 있을 때 (추가하려면 써야함)
    showSpeed() {
      console.log(this.speed); // private는 접근 불가, protected는 가능
    }
  }

  const benz = new Benz(100);
  benz.showSpeed();
}
{
  // 2.3 protected - 클래스 내부, 상속에서만 접근 가능
  class Charcter {
    protected hp: number = 100;
  }
  class Warrior extends Charcter {
    attack() {
      this.hp -= 10;
      console.log(`HP after attack: ${this.hp}`);
    }
    displayWarriorInfo() {
      console.log(`Warrior HP: ${this.hp}`);
    }
  }

  const warrior = new Warrior();
  warrior.displayWarriorInfo();
  warrior.attack();
}
{
  // 2.4 readlony - 값 수정 불가
  class Config {
    readonly apiUrl = "https://api.example.com";
    readonly appVersion = "v1.0";
  }
}
{
  // 4. 메소드 오버라이딩 (js에도 있는 개념)
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    getSpeed(): string {
      return `Car: ${this.speed}`;
    }
  }

  class Benz extends Car {
    name: string;
    constructor(speed: number, name: string) {
      super(speed);
      this.name = name;
    }
    getSpeed(): string {
      // 주의할 점 : ts에서는 부모와 타입이 같아야 함
      return `100`;
    }
  }

  const benz = new Benz(100, "S class");
  console.log(benz.getSpeed());
}
{
  // 3. 추상 클래스
  // 직접 인스턴스를 생성할 수 없는 클래스로,
  // 주로 공통의 속성이나 메서드를 정의하기 위해서 사용 (직접 구현도 가능)
  // (이런게 있을 것 예정 느낌?)
  abstract class Animal {
    abstract makeSound(): void;
  } // Animal 클래스를 쓰려면  makeSound()를 구현해야 한다, 라는 의미? - 구현 의무 발생
  // 추상 클래스에 적어놓은 것을 구현하지 않으면 에러 발생
  // 필요한 부분을 미리 만들어두는 느낌 (약간 이거 만들어놔야함 하고 메모하는 느낌-추상적, 근데 안 지키면 클 나는)
  class Dog extends Animal {
    makeSound(): void {
      console.log("멍멍");
    }
  }
  const dog = new Dog();
  dog.makeSound();
}
{
  abstract class CarAbstract {
    abstract name: string;
    abstract speed: number;
    abstract color: string;
    abstract maxSpeed(): number;
    // 직접구현도 가능
    code: string = "1asffret2";
  }

  class Benz extends CarAbstract {
    // extends는 하나 밖에 불가능, 추상클래스를 상속 받는 순간 Car같은 다른건 상속 불가
    name: string;
    speed: number;
    color: string;
    constructor(name: string, speed: number, color: string) {
      super();
      this.name = name;
      this.speed = speed;
      this.color = color;
    }
    maxSpeed(): number {
      return this.speed;
    }
  }

  const benz = new Benz("S", 200, "black");
  console.log(benz.maxSpeed());

  // 추상클래스 장점 - 연관된 클래스에 공통의 속성과 메서드를 구현하도록 강제할 수 있음
  // 단점 - 상속이 하나 밖에 안 되서 다른거 추가 상속 못 함
}
{
  // 단점 보완 -> implements + interface(type)
  // 구현 의무 생성 + "여러 개" implements 가능
  // 단, 추상 클래스와 달리 직접 구현이 불가능
  interface Runner {
    name: string;
    run(): void;
  }
  /*
  // 이렇게 쓸 수도 있음
  type Runner = {
     name: string;
    run(): void;
  };
  */
  interface Swimmer {
    swim(): void;
  }

  abstract class PersonAbstract {
    abstract stop(): void;
  }

  class Person extends PersonAbstract implements Runner, Swimmer {
    //extendsd와 implements는 별개이므로 둘 다 함께 사용 가능
    name: string;
    constructor(name: string) {
      super();
      this.name = name;
    }
    run(): void {
      console.log("Person is Run!");
    }
    swim(): void {
      console.log("Person is swim!");
    }
    stop(): void {
      console.log("stop!");
    }
  }
}
{
  // 이런 것도 됨
  interface A {
    a(): void;
  }
  interface B extends A {
    b(): void;
  }
  class X implements B {
    a(): void {}
    b(): void {}
  }
}
{
  // 이런 것도 됨
  type A = {
    a(): void;
  };
  type B = A & {
    b?(): void;
    // b는 옵셔널 파라미터니까 구현 해도 되고 안 해도 됨
  };
  class X implements B {
    a(): void {}
    b(): void {}
  }
}
{
  // abstract
  // 상속의 개념을 그대로 활용하면서 공통의 속성이나 메서드를 구현하고 싶을 때 (직접 구현 가능)
  // implements
  // 상속과 별개로 공통의 속성이나 메서드를 구현하고 싶을 때 (직접 구현 불가능)
  // 사회적 통념 -> ??
}
// 언급 이외의 내용은 JS와 동일
