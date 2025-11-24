//상수 객체
//상수의 값 자체를 바꾸는건 불가능하지만, 상수 객체의 값을 추가/수정/삭제는 가능하다.

const animal = {
  type: "cat",
  name: "치즈",
  color: "black",
};

//불가능
//animal = "new";

//가능
animal.age = 2;
animal.name = "고등어";
delete animal.color;

//2. 메서드
//-> 값이 함수인 프로퍼티를 말함. (자바와 조금 다름)

const person = {
  name: "길동",

  //메서드
  greeting: () => {
    console.log("bonjour");
  },

  sayHi() {
    console.log("안녕하세요");
  },
};

person.greeting();
person.sayHi();
