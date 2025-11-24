//1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴 (주로 사용)

let person = {
  name: "홍길동",
  age: 25,
  extra: {},
  10: 20,
  "like cat": true,
};

//2. 객체 프로퍼티를 다루는 법
let age = person.age;
let name = person["name"];

//3. 새로운 프로퍼티 추가
person.job = "fe developer";
person["favFood"] = "피자";

//4. 수정
person.job = "educator";
person["favFood"] = "치킨";

//5. 삭제
delete person.job;
delete person["job"];

//6. 프로퍼티 존재 유무 확인 (in 연산자)
let isExist = "name" in person;
