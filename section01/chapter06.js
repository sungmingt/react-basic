//1. 묵시적 형 면환 (-> JS가 알아서 형 변환)
let num = 10;
let str = "20";
const result = num + str;

//2. 명시적 형 변환 (개발자가 직접 함)
let str1 = "10";
let strToNum1 = Number(str1);

//숫자와 문자가 섞여있는 문자열을 숫자로 바꿀때는 parseInt()를 쓰면 됨!! (숫자가 앞에있어야함.)
let numAndStr = "10개입니다.";
console.log(parseInt(numAndStr));
