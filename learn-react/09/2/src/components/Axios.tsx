// 기본 요청 방법

// import axios from "axios";
// import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

export default function Axios() {
  // 커스텀훅 버전
  const {
    data: posts,
    isLoading,
    error,
  } = useAxios("http://localhost:3001/posts");

  // const [posts, setPosts] = useState<Post[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await axios.get("http://localhost:3001/posts");
  //       setPosts(data);
  //     } catch (e) {
  //       setError(e instanceof Error ? e.message : "unknown error");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
