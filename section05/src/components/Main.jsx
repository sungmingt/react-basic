//JSX 주의사항
//1. 중괄호 내에는 JS 표현식만 넣을수 있다. (if문 등 X)
//2. 숫자/문자열/배열만 렌더링됨.
//3. 모든 태그가 닫혀있어야함.
//4. 최상위 태그는 하나여야 한다.

// const Main = () => {
//   const number = 10;

//   return (
//     <main>
//       <h1>Main</h1>
//       <h2>{number + 10}</h2>
//       {[1, 2, 3]}
//       {"hello"}
//     </main>
//   );
// };

//css파일 불러올때는 이렇게 해도 되도록 react에서 제공.
import "./Main.css";

//class=""는 JS 예약어이기떄문에, className="" 사용
const Main = () => {
  const user = {
    name: "제임스",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
};
export default Main;
