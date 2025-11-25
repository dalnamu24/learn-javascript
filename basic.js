console.log("Hello World!");

// 변수
const milkCaramel = "빨간펜";
let youtube = "후츠릿"; // 데이터타입 : 문자열

youtube = "십오야";
console.log("🚀 ~ youtube:", youtube);

console.log("milkCaramel", milkCaramel);

// milk caramel => milkCaramel (카멜케이스) 띄워쓰기를 하지 않고 공백 다음 글자를 대문자로 쓴다.

// 미션 : 여러분의 나이를 age 라는 변수에 담고 해당 변수를 console 탭에 출력하는 코드를 작성하세요.

const age = 43; // 데이터타입 : 숫자
console.log("🚀 ~ age:", age);

/**
 * 데이터 타입
 * 1. 문자열 (string)
 * 2. 숫자 (number)
 * 3. 참 과 거짓판단 (boolean)
 * 4. null / undefined => 값이 비어있을때
 */

// 출입 가능 여부를 판별
const isComming = true;
console.log("🚀 ~ isComming:", isComming, typeof isComming);

console.log("age type:", typeof age);

// 함수

// 함수 정의/선언
function sayhello() {
  //실행할 로직들 넣기
  console.log("Hello World!");
}

// 함수 실행/호출
sayhello();
sayhello();
sayhello();
