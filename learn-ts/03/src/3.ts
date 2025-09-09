{
  // 6. 인터페이스
  // 객체의 타입을 지정할 때 사용하는 타입 지정 방법
  // interface

  // 타입별칭과 유사하지만 다름
  // 타입별칭은 원래 존재하는 타입을 이용해 나만의 타입을 만듦
  // 인터페이스는 오로지 객체만을 위한 타입

  // type 식별자 = 할당, 식별자에 값을 할당하는 느낌
  // interface 식별자 { }, 객체와 연결 *

  // 6.1
  interface Person {
    name: string;
    age: number;
    gender: "male" | "female" | "natural";
  }
}
{
  // 6.2 혼합 사용 가능
  type Gender = "male" | "female" | "natural";
  interface Person {
    name: string;
    age: number;
    gender: Gender;
  }
}
{
  // 6.3 메서드
  interface Person {
    name: string;
    age: number;
    greet(x: string): void; // greet: (x:string) => void; 를 단축한 것
  }

  const person: Person = {
    name: "kim",
    age: 20,
    // greet: function(){
    //   console.log(`Hello, ${this.name}`);
    // }
    // 단축속성으로 줄임
    greet(x) {
      console.log(`${x}, Hello, ${this.name}`);
    },
  };

  person.greet("HI");
}
{
  // 객체에서 쓰이던거 다 쓸 수 있음
}
{
  // interface와 type의 문법적 차이

  // 6.4 interface만의 특징 1 : 자동 병합
  // 이름 중복이 가능하다
  interface Person {
    name: string;
  }

  interface Person {
    age: number;
  }

  const person: Person = {
    name: "kim",
    age: 20,
  };
  // 주의할 점
  // 타입 별칭에서는 식별자 이름 똑같이 쓰면 에러가 나서 찾을 수가 있고 선언 자체가 불가능
  // 인터페이스는 에러 안 나고 자동 병합이 되어버림, 실수로 같은 이름을 쓰게 되는 경우 원치 않은 병합 발생
  // 특히 협업할 때 이름이 겹쳐서 자동 병합 될 가능성도 있음, 자주 일어나는 일임
}
{
  // 6.5 interface만의 특징 2 : 상속
  // 상속은 좀 추상적인 개념, 부모-자식 관계에 정해진 공식 같은게 없음, 주관적 판단으로 결정
  interface Person {
    name: string;
    age: number;
  }

  interface Developer extends Person {
    skill: string;
  }

  const developer: Developer = {
    name: "kim",
    age: 20,
    skill: "javascript",
  };

  // 다중 인터페이스 상속 *
  interface Flyer {
    fly(): void;
  }
  interface Swimmer {
    swim?(): void; // 선택적 속성(옵셔널 파라미터)도 가능
  }
  interface Bird extends Flyer, Swimmer {
    sound(): void;
  }

  type FlyerAndSwimmer = Flyer & Swimmer;
  // ㄴ 타입 별칭 + 인터페이스

  const duck: Bird = {
    fly() {},
    //swim(){},
    sound() {},
  };
}
{
  // 객체는 둘 중 뭘 이용하는게 좋을까 (뜨감이다)
  // 국내 :: 대부분 객체는 인터페이스 정의, 그 외는 타입 별칭 사용
}
