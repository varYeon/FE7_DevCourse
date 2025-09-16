export default function App() {
  return (
    <div>
      <header>
        <h1>내 웹사이트</h1>
      </header>

      <nav>
        <ul>
          <li>
            <a href="#section1">소개</a>
          </li>
          <li>
            <a href="#section2">서비스</a>
          </li>
          <li>
            <a href="#section3">연락처</a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="section1">
          <h2>소개</h2>
          <p>여기에 소개 내용을 작성하세요.</p>
        </section>

        <section id="section2">
          <h2>서비스</h2>
          <p>여기에 제공하는 서비스 내용을 작성하세요.</p>
        </section>

        <section id="section3">
          <h2>연락처</h2>
          <p>여기에 연락처 정보를 작성하세요.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 내 웹사이트. 모든 권리 보유.</p>
      </footer>
    </div>
  );
}
