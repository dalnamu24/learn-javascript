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
