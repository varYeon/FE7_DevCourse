{
  /* class */

  // js의 class 와 차이점
  // 1. 타입 시스템이 추가

  class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    greet(): string {
      return `Hello, ${this.name}`;
    }
  }
  const person = new User("sy", 20);
  console.log(person.greet());

  /*
  js코드
    class User {
    name: string;
    age: number;
    constructor(name:string, age:number){
      this.name=name;
      this.age=age;
    }
    greet():string {
      return `Hello, ${this.name}`;
    }
  }
  const person = new User("sy", 20);
  console.log(person.greet());
  */
}
{
  // 2. 접근 제어자 (public, private, protected, readonly)
  // 2.1 public - 누구나 접근 가능(인스턴스 외부, 클래스 내부, 상속 클래스 등), 생략하면 public
  // 2.2 private - 클래스 내부에서만 접근 가능(외부x, 상속x)
  // 2.3 protected - 클래스 외부에서만 접근 불가능 (내부O, 상속O)
  // 2.4 readonly - 읽기만 가능, 수정 불가능
  class Car {
    private speed: number; //#speed 대신
    constructor(speed: number) {
      this.speed = speed;
    }
  }

  const benz = new Car(100);
  //console.log(benz.speed); // 접근 불가
}
{
  // private / protected
  class Car {
    protected speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  }

  class Benz extends Car {
    printSpeed(): void {
      console.log(`${this.speed}`); // private면 접근 불가, protected면 가능
    }
  }
}
