import { useRef, useState } from "react";
import Input from "./components/Input";

export default function App() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const [pw, setPw] = useState("");
  const pwRef = useRef<HTMLInputElement>(null);

  const handleEmailUpate = (value: string) => {
    setEmail(value);
  };
  const handlePwUpate = (value: string) => {
    setPw(value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("이메일을 입력해주세요");
      if (emailRef.current) emailRef.current.focus();
      return;
    }
    if (pw.trim() === "") {
      alert("비밀번호를 입력해주세요");
      if (pwRef.current) pwRef.current.focus();
      return;
    }
    console.log(email, pw);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          ref={emailRef}
          placeholder="이메일 입력"
          value={email}
          setValue={handleEmailUpate}
        />
        <Input
          type="password"
          ref={pwRef}
          placeholder="비밀번호 입력"
          value={pw}
          setValue={handlePwUpate}
        />
        <button>로그인</button>
      </form>
    </>
  );
}
