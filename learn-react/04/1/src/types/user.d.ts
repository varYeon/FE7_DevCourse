// type만 몰아넣는 파일 : d.ts
// 전역 가능
// export 없이 자동 인식 가능 == src 퐇더 안에 존재하기 때문 (설정이 있기 때문)
// ㄴ 설정 : tsconfig.jason에  "include": ["vite.config.ts"]
// 같은 이름으로 타입 지정 하지 않도록 주의 (전역 충돌 주의)

type User = {
  name: string;
  age: number;
};

type UserProps = {
  userObj: User;
  clickHandler: () => void;
};
