{
  // ts 문법 검사
  // @ts-check

  /**
   * @type {number}
   */
  let numTS = 10;
  // 같은 폴더 안에 다른 파일에 정의된 변수 이름 사용 불가를 알려줌
  let num = "H"; // 왜 경고 안 쓰지

  // 위에를 TS 파일에 쓰는게 이거 - > 간추려짐
  //let num2: number = 10; // 이렇게
}
