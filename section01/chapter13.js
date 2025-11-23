//1. 콜백함수: 다른 함수에 인자로 전달된 함수를 뜻함.

function main(value) {
  value();
}

//callback 함수
function sub() {
  //console.log("i am sub");
}

//2. callback 함수는 언제 쓰는가?
//-> 함수의 재사용

function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, function (idx) {
  console.log(idx * 3);
});
