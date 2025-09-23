import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { increment, incrementByAmount } from "../store/slice/counterSlice";

export default function CountButtons() {
  console.log("buttons rendering");
  // 자동으로 컴포넌트 최적화 됨 (React.memo, useCallback, useMemo 이런거 없어도 됨)
  const dispatch = useDispatch<AppDispatch>();
  // dispatch 는 reducers에 접근 그 안의 모든 슬라이스? 에 접근 가능
  return (
    <>
      <button onClick={() => dispatch(increment())}>
        {/* 여기서 counterSlice는 counterSlice의 name값 */}
        {/* increment()의 정석은 { type: "counterSlice/increment" } */}
        증가
      </button>
      <button onClick={() => dispatch(incrementByAmount({ amount: 20 }))}>
        {/* 매개변수가 필요할 떄 */}
        증가 (+20)
      </button>
    </>
  );
}
