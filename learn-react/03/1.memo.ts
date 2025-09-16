// 1. component styling

// 1.3 Tailwind CSS (BootStrap 같은)

// 1.3.1 Utility-First 방식으로 설계된 CSS 프레임워크
// 1.3.2 BootStrap 처럼 미리 만들어진 컴포넌트를 제공하는 대신, 테일윈드는 아주 작은 유틸리티 클래스 제공
// 1.3.3 유틸리티 클래스?
// 1.3.3.1 작고 단일한 역할만 하는 CSS 클래스를 조합해서 UI를 만드는 방식
// 1.3.3.2
// CSS :: .btn-primary { background-color: blue; color: white; padding: 10px;}
// HTML :: <button class="btn-primary"></button>
//  -> Tailwind :: <button class="bg-bluie-500 text-white p-2.5"></button>
//    단점 : 러닝커브(암기필요), 인라인스타일링과 차이가 없어 보임, 가독성 등
//    장점 : 작고 재사용 가능한 단위인 component와 궁합이 좋음, 스타일 독립 적용 가능, css 없이도 스타일 적용 가능 등
//    중요 -> 유틸리티 클래스 암기는 필수 (공식문서 자주 참고 - cmd+K로 검색 가능)
// 1.3.4 사용하려면
// 1.3.4.1 extension 설치 :: Tailwind CSS IntelliSense
// 1.3.4.2 공식 문서 :: https://tailwindcss.com/ (설치 방법 참고, 다른 방법을 따라가지 않도록 주의)
// 1.3.4.3 패키지 (추가) :: npm install tailwind-merge
// 스타터팩(starter pack) : 패키지, 기본코드, 폴더구조 등을 세팅해놓은 상태
// 1.3.5 자주 사용하는 것은 나만의 유틸리티 생성 가능 -> 가독성 해결!
// 1.3.5.1 ex) @utility btn-primary {}
// 1.3.5.2 이런식으로 다양한 기능들이 많으므로 공식 문서를 참고

// 1.3.6 tailwind-merge 패키지 (1.3.4.3)
// 1.3.6.1 CSS Modules에서의 classNames 같은 역할 (얘도 쓸 수 있긴 함)
// 테일윈드에서 공통된 스타일을 적용하면 뒤의 것이 이김
// 차이점 : twMerge는 중복된 테일윈드 스타일을 합쳐줌(정리), 앞에거 지우고 뒤에거 남김, 이외에는 거의 동일
// 1.3.6.2 어케 쓰냐 className={twMerge(`bg-amber-400`,`bg-blue-500`)}, 조건부 가능
