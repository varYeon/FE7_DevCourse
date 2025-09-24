import { useEffect, useState } from "react";
// 여러 개 쓸려ㅑ면 그 개수만큼 아래 코드가 반복됨
// 조금이라도 줄이기 위해 useFetch 라는 커스텀훅을 생성

export default function useFetch<T>(url: string) {
  // 하나의 데이터를 불러오기 위한 최소환의 상태수 3개
  // 1. 데이터를 다룰 수 있는 상태
  const [data, setData] = useState<T | null>(null);
  // 2. 로딩를 다룰 수 있는 상태
  const [isLoading, setIsLoading] = useState(true);
  // 3. 에러를 다룰 수 있는 상태
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // 데이터를 패칭하는 코드
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:3001/posts");
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        setData(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
