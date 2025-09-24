// 화면 렌더링과 관련 없는 작업 -> 사이드 이펙트
// 사이드 이펙트 -> useEffect()

// 데이터 패칭할 때, 최소 아래의 세 개는 있어야 함

import useFetch from "../hooks/useFetch";

export default function Fetch() {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch<Post[]>("http://localhost:3001/posts");

  const {
    data: comments,
    isLoading: isLoadingComments,
    error: errorComments,
  } = useFetch("http://localhost:3001/comments");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
