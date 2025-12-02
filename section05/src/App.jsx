import "./App.css";
// import Footer from "./components/Footer.jsx";
// import Main from "./components/Main.jsx";
// import Header from "./components/Header.jsx";
// import Button from "./components/Button.jsx";
import { useState } from "react";
import Register from "./components/Register";

function App() {
  const [state, setState] = useState(0);
  console.log(state);

  return (
    <>
      <Register />
    </>
  );
}

// //App 컴포넌트!
// function App() {
//   const buttonProps = {
//     text: "메일",
//     color: "red",
//     a: "1",
//     b: "2",
//   };

//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />

//       <Button {...buttonProps} />
//       <Button text={"카페"} />
//       <Button text={"블로그"} />
//     </>
//   );
// }

export default App;
