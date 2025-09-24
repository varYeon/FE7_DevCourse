// zustand
// 쉽고 간단

// 변수 규칙 use***Store
// 커스텀 훅 처럼 사용하기 때문에 이런 관례를 가짐

// seter 함수 사용 (create 함수의 첫번째 매개변수로써 seter 제곡)
// 관례상 set 이라는 이름 이용
// 상태업데이트(콜백함수) 함수롸 유사

// 미들웨어는 순서가 있음 (순서대로 감쌈)
// conbine -> immer -> persit -> devtools -> subscribeWithSeletor

// 로컬 스토리지 -> 브라우저 종료 해도 삭제 안 됨, 탭과 탭 사이 공유됨
// 새션 스토리지 -> 브라우저 종료 하면 삭제됨, 대신에 탭과 탭 사이 공유 안 됨

import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementByAmount: (value: number) => void;
};
export const useCounterStore = create<CounterStore>((set) => ({
  count: 10,
  // 연관 있으니 콜백함수 형태
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  // 연관 없어서 값형태
  reset: () => set({ count: 0 }),
  incrementByAmount: (value) =>
    set((state) => ({ count: state.count + value })),
}));
