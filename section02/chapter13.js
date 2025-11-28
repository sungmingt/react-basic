//promise
//API 호출, 서버와의 통신 등에서 활발히 사용된다.

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업을 실행하는 함수
    //executor

    setTimeout(() => {
      const num = 10;

      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);

    resolve();
  });
}

//then, catch

const promise = add10(0);

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
