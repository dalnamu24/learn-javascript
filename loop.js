// 재료 목록 데이터
const ingredients = ["김치", "버섯", "계란", "양배추"]; //배열

// console.log("1번째 데이터", ingredients[0]);
// console.log("2번째 데이터", ingredients[1]);
// console.log("3번째 데이터", ingredients[2]);
// console.log("4번째 데이터", ingredients[3]);

// 반복문
ingredients.forEach((value, index) => {
  // n번 실행
  console.log(`${index}번째 데이터: ${value}`);
});

const messages = [
  {
    username: "맛있는 쉐프",
    message: "대화를 시작해볼까요?",
  },
  {
    username: "후츠릿",
    message: "그래. 너는 이름이 뭐야?",
  },
];

messages.forEach((item) => {
  // 반복 실행 구문
  // item의 속성 : 객체(Object)
  console.log(item.message);
});

const names = ["alice", "bob", "kelly", "david"];
// 원래대로 코딩을 한다하면 아래처럼 해야하는데
// let upperNames = [];
// names.forEach((name) => {
//   result = name.toUpperCase();
//   upperNames = [...upperNames, result];
// });
// console.log("upperNames", upperNames);

// MAP 을 사용해서 코딩하면 간단하게 할 수 있다.
const upperNames = names.map((name) => name.toUpperCase());
console.log("🚀 ~ upperNames:", upperNames);

// FILTER 는 무조건 배열을 리턴하기때문에 조건에 부합히자 않더라도 비어있는 배열만 반환한다
const filterNames = names.filter((name) => name.length >= 4);
console.log("🚀 ~ filterNames:", filterNames);

// FIND 는 조건에 부합하는 값이 나오면 해당 데이터를 반환하고 나머지는 바로 패스한다.
const findName = names.find((name) => name[0] === "k");
console.log("🚀 ~ findName:", findName);

// SOME : 배열을 순회하면서 각각의 요소들 중 하나라도 조건에 부합하면 true, 그렇지 않으면 false를 반환
const someName = names.some((name) => name.length >= 4);
console.log("🚀 ~ someName:", someName);

// EVERY : 배열의 모든 요소가 조건을 만족해야지만 true, 하나라도 조건에 부합하지 않으면 false 를 반환
const everyName = names.every((name) => name.length >= 4);
console.log("🚀 ~ everyName:", everyName);

// Q1. 함수 (화살표 함수)
// 문제: 다음 함수를 화살표 함수로 변환하세요.
// function add(a, b) {
// 	return a + b;
// }
// // 여기에 화살표 함수로 다시 작성하세요.
// const add =
// console.log(add(5, 3)); // 예상 결과: 8

const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(5, 3)); // 예상 결과: 8

// Q7. 다음 코드에서 짝수만 필터링된 새로운 배열을 만들어 주세요 (`filter`)
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = // 여기에 코드를 작성하세요.
// console.log(evenNumbers); // 예상 결과: [2, 4, 6]

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
