import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice", // 파일명과 동일해야 함 (관례, 겹치면 안 되므로)
  initialState: {
    value: 0,
  },
  reducers: {
    // 항상 함수 형태, 상태값을 바꿀 수 있는 로직이 들어감
    // state -> 항상 최신의 상태값이 들어감
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action: PayloadAction<{ amount: number }>) => {
      //action이 매개변수를 담는? 객체? payload라는 속성이 있는?
      state.value += action.payload.amount;
      // {amount: 20;}
    },
  },
});

export const { increment, incrementByAmount } = counterSlice.actions;
// 여기서 counterSlice = 변수명
export default counterSlice.reducer;
// 리덕스 스토어 (중앙 집중형 관리 단말기)에 꽂아주기 위해 내보냄
