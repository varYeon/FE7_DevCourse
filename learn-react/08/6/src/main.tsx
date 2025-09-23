import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

// 전역 상태 관리
// 1. Context API
// 2. Redux Toolkit (Redux vs Redux Toolkit)
// 2.1 Redux -> 2015년도에 출시된 (자바스크립트) 전역 상태 관리 라이브러리 (리액트를 위한 애가 아님, 바닐라 기반)
// 2.2 Redux Toolkit (2019) -> Redux를 더 쉽게 쓰기 위해 만들어진 도구 (오늘날 쓰는 것)
// 3. Zustand
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
