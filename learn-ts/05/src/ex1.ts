// 클래스
// 연습문제
// 생성자 함수 -> 타입스크립트 클래스 문법을 사용하여 변환

{
  // 1.
  class Person {
    // name: string;
    // age: number;
    // constructor(name: string, age: number) {
    //   this.name = name;
    //   this.age = age;
    // }
    // 생략 방법 -> 팀/조직에 따라 선호도가 있는 편, 같은 의미임
    // 암시적 필드 선언(implicit field ~~) -> 접근제어자 이용하여 줄이는 방법
    constructor(public name: string, public age: number) {}

    greet(): void {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    }
  }

  const person = new Person("Alice", 30);
  person.greet(); // "Hello, my name is Alice and I am 30 years old."
}
{
  // 2.
  class Student {
    name: string;
    grade: number;
    constructor(name: string, grade: number) {
      this.name = name;
      this.grade = grade;
    }
    displayInfo(): void {
      //: void 생략 가능? -> (함수타입) 반환값 정도는 추론 가능 -> 이 부분도 팀/조직에 맞춰서
      console.log(`${this.name} is in grade ${this.grade}.`);
    }
  }

  const student = new Student("Bob", 10);
  student.displayInfo(); // "Bob is in grade 10."
}
{
  // 3.
  class Car {
    brand: string;
    model: string;
    constructor(brand: string, model: string) {
      this.brand = brand;
      this.model = model;
    }
    getCarInfo(): string {
      return `${this.brand} ${this.model}`;
    }
  }

  const car = new Car("Toyota", "Corolla");
  console.log(car.getCarInfo()); // "Toyota Corolla"
}
{
  // 4.
  class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
    getArea(): number {
      return this.width * this.height;
    }
  }

  const rectangle = new Rectangle(5, 10);
  console.log(rectangle.getArea()); // 50
}
{
  // 5.
  class Book {
    title: string;
    author: string;
    constructor(title: string, author: string) {
      this.title = title;
      this.author = author;
    }
    getBookInfo(): string {
      return `"${this.title}" by ${this.author}`;
    }
  }

  const book = new Book("1984", "George Orwell");
  console.log(book.getBookInfo()); // "\\"1984\\" by George Orwell"
}
{
  // 6.
  class Employee {
    name: string;
    salary: number;
    constructor(name: string, salary: number) {
      this.name = name;
      this.salary = salary;
    }
    getSalary(): string {
      return `${this.name} earns $${this.salary}`;
    }
  }

  const employee = new Employee("Alice", 50000);
  console.log(employee.getSalary()); // "Alice earns $50000"
}
{
  // 7.
  class Shape {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    getShapeName(): string {
      return `This is a ${this.name}`;
    }
  }

  const shape = new Shape("Circle");
  console.log(shape.getShapeName()); // "This is a Circle"
}
{
  // 8.
  class Library {
    name: string;
    books: string[];
    constructor(name: string, books: string[]) {
      this.name = name;
      this.books = books;
    }
    getBooks(): string {
      return `${this.name} has the following books: ${this.books.join(", ")}`;
    }
  }

  const library = new Library("City Library", ["1984", "Brave New World"]);
  console.log(library.getBooks()); // "City Library has the following books: 1984, Brave New World"
}
{
  // 9.
  class DateUtil {
    day: number;
    month: number;
    year: number;
    constructor(day: number, month: number, year: number) {
      this.day = day;
      this.month = month;
      this.year = year;
    }
    getDate(): string {
      return `${this.day}/${this.month}/${this.year}`;
    }
  }
  const date = new DateUtil(12, 5, 2024);
  console.log(date.getDate()); // "12/5/2024"
}
{
  // 9-1
  // Date 타입
  const date: Date = new Date();
  // data 관련 메서드 사용 가능
}
{
  // 10.
  class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
    getDistance(): number {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }

  const point = new Point(3, 4);
  console.log(point.getDistance()); // 5
}
