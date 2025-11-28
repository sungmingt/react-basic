//async
//함수를 비동기 함수로 만들어주는 키워드
//함수가 promise를 반환하도록 변환해주는 키워드

async function getData() {
  return new Promise((resolve, result) => {
    setTimeout(() => {
      resolve({
        name: "james",
        id: "kingJames123",
      });
    }, 3000);
  });
}

//await
//async 함수 내부에서만 가능한 키워드
//비동기 함수 처리가 끝나기를 기다리는 역할

//then을 사용할 필요없이, 간단하게 코드 작성 가능

async function printData() {
  //getData()가 반환하는 promise의 동작이 종료될때까지 기다린다.
  const data = await getData();

  console.log(data);
}

printData();
