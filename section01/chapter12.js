//1. 함수 표현식
function funcA() {
  console.log("funcA");
}

//JS는 함수를 값으로 취급하기때문에, 함수자체를 변수에 담을수있음.
let varA = funcA;
varA();

//익명함수도 있음.(값으로써 생성한 함수).  하지만 이건 호출은 불가.
let varB = function () {
  console.log("funcB");
};

//2. 화살표 함수
let varC = () => {
  return 1;
};
console.log(varC());

//값만 return한다면 중괄호 필요없음.
let varC2 = (val) => val + 1;
console.log(varC2(10));
