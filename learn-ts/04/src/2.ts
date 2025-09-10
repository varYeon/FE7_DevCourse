// enum (이넘) **
{
  /* enum (이넘) */
  // 고정된 값들의 집합을 정의하는 데 사용하는 특수한 타입
  // :: 고정되어 있는 값을 타입으로 묶어둠, 의미있는 타입 그룹으로 묶어놓은 타입
  // 리터럴 타입을 써도 똑같은데 고정된 값을 의미적으로 타입화하여 관리하고 싶어서 이넘을 쓰는것, 의미적으로 직관적이기도 함

  // 리터럴 타입
  type MoveX = "left" | "right";
  function moveX(direction: MoveX): void {
    if (direction === "left") {
      console.log("move left");
    }
    if (direction === "right") {
      console.log("move right");
    }
  }

  moveX("left");
  moveX("right");
  //moveX("up"); // 실행 되지 않음
  // 잠재적 에러 발생 요소 - left,right만 설정했으므로 up을 못 넘어가게 해야 함 -> (리터럴 타입, 타입별칭 사용해서 처음부터 에러 발생)

  type Move = "left" | "right" | "up" | "down";
  function move(direction: Move): void {
    if (direction === "left") {
      console.log("move left");
    }
    if (direction === "right") {
      console.log("move right");
    }
    if (direction === "up") {
      console.log("move up");
    }
    if (direction === "down") {
      console.log("move down");
    }
  }

  move("left");
  move("right");
  move("up");
  move("down");
}
{
  // 이넘
  enum CharacterMoveX {
    LEFT,
    RIGHT,
  }

  function characterMoveX(direction: CharacterMoveX): void {
    if (direction === CharacterMoveX.LEFT) {
      console.log("move left");
    }
    if (direction === CharacterMoveX.RIGHT) {
      console.log("move right");
    }
  }

  characterMoveX(CharacterMoveX.LEFT);
  characterMoveX(CharacterMoveX.RIGHT);
}
{
  /* 숫자형 enum */
  enum Direction {
    UP, // 0
    DOWN = 100, // 100
    LEFT = 300, // 300
    RIGHT, // 301
    // 따로 숫자 할당 안 하면 0부터 +1
    // 숫자 할당을 한다면 그 숫자부터 +1
    // 일부만 할당도 가능
  }

  console.log(Direction.UP); // 0
  console.log(Direction.DOWN); // 1
  console.log(Direction.LEFT); // 2
  console.log(Direction.RIGHT); // 3
}
{
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
  }

  function handleResponse(code: StatusCode) {
    switch (code) {
      case StatusCode.OK:
        return "성공";
      case StatusCode.BadRequest:
        return "실패";
      case StatusCode.Unauthorized:
        return "인증에러";
      case StatusCode.NotFound:
        return "찾을 수 없음";
    }
  }

  handleResponse(StatusCode.NotFound);
}
{
  /* 문자형 enum (열거형) */
  enum Direction {
    UP = "Up",
    DOWN = "Down",
    LEFT = "Left",
    RIGHT = "Right",
  }

  console.log(Direction.DOWN);
}
{
  /* 혼합 enum (열거형) */
  // 주의할 점 :: 모든 값에 값을 할당해야 함 (잘 안 쓰는 형식이긴 함)
  enum Mix {
    YES = 1,
    NO = "No",
  }
  enum example {
    UP, // 0
    DOWN = 100,
    LEFT = "Left",
    //RIGHT, // 에러 발생
  }
  enum example2 {
    UP, // 0
    DOWN = 100,
    LEFT, // 101 -> 얘는 에러가 안 남, 이런 혼란을 줄이기 위해 모든 값에 값을 할당하기를 권장
    RIGHT = "Right",
  }
}
{
  /* 리버스 매핑 (역방향 매핑) */
  // 숫자형 이넘에만 지원하는 개념

  enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }

  console.log(Direction.UP); //0 -> 정방향 매핑
  console.log(Direction[0]); //UP -> 역방향 매핑, 부여된 숫자로 부터 문자 찾기
}
{
  // 리버스 매핑 이용
  enum Key {
    ArrowUp,
    ArrowDown,
  }

  function onKeyPressed(code: Key) {
    console.log("Pressed : " + Key[code]);
  }

  onKeyPressed(1);
  onKeyPressed(Key.ArrowDown); // 같은 의미, Key.ArrowDown === 1
}
{
  /* const enum */
  enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }

  const enum Direction2 {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }

  // enum은 js에 존재하지 않는 문법 -> 최종적으로 js로 컴파일 될 때 const 사용하면 구현부 부분이 남지 않음
  // const는 역방향 매핑 불가능 -> 구현부가 흔적이 남지 않기 때문에 참조 불가
  // 구현부 흔적이 없기 때문에 전체 파일 사이즈(양코드)를 줄여주어 선호됨 -> 이넘과 똑같이 사용하는데 코드의 양을 줄여줌
  // 구현부 라는게... 즉시 실행 함수의 실제 동작 코드
}
{
  // 객체 - interface (>type)
  // 리터럴 타입 - enum (const enum)
  // 타입 별칭 - 유니온 타입, 인터섹션
  interface Token {
    token?: string;
  }
  interface Account {
    id: number;
    role: "admin" | "guest";
  }
  interface AuthAccount extends Token {}
  // interface로 다 쓸 수 있는데 enum, type으로 빼내서 쓸 수도 있음
  // 그 기준은 내가 편할 때, 적절하다고 생각할 때, 납득될 때 (근데 알고 이해는 해야지 다른 이의 코드에서 봐도 이해 가능)
  // 납득이 안 되서 활용이 부족해도, 다른 사람이 작성한 코드를 이해할 수 있을 정도는 되어야 함 (그렇게 쓰다보면 언젠가 깨달음)
}
{
  // 위의 코드를 뺴내서 쓴 것
  const enum Role {
    ADMIN = "admin",
    GUEST = "guest",
  }
  interface Account {
    id: number;
    role: Role;
  }
  type AuthAccount = Account & { token?: string };
}
