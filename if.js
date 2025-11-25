// 조건문 기본구문 if() {} else{}
const score = 80;

const pass = () => {
  console.log("합격 👍");
};

// 불합격을 출력하는 화살표 함수 (fail)
const fail = () => {
  console.log("불합격 😱");
};

// if (score >= 60) {
//   // 조건식이 True 인 경우 실행할 구문
//   // 합격
//   pass();
// } else {
//   // 조건식이 false 인 경우 실행할 구문
//   // 불합격
//   fail();
// }

//삼항연산자
score > 60 ? pass() : fail();

// console.log("if문 종료");

if (score >= 90) {
  console.log("A등급");
} else if (score >= 80) {
  console.log("B등급");
} else if (score >= 70) {
  console.log("C등급");
} else if (score >= 60) {
  console.log("D등급");
} else {
  console.log("E등급");
}

console.log("if문 종료");

const isCheck = "abc" === "abc";
console.log("🚀 ~ isCheck:", isCheck);

const userInput = "";

if (!userInput) {
  // userInput 의 값이 비어있는 경우 실행됨
  console.log("값을 입력해주세요");
}

// 배열
// 재료 목록 데이터
const ingredients = ["김치", "버섯", "계란", "양배추"]; //배열
console.log("2번째 데이터==>", ingredients[1]);
console.log("3번째 데이터==>", ingredients[2]);
console.log("ingredients 갯수 : ", ingredients.length);

const person = {
  NAME: "최지욱",
  MBTI: "INTP",
  COMPANY: "한국도로공사",
  CITY: "김천",
  isMale: true,
};

console.log("0번째 데이터", person["NAME"]);
console.log("COMPANY", person["COMPANY"]);
console.log("COMPANY", person.COMPANY); // 닷 표기법 권장 ⭐

const messageInfo = {
  userImage:
    "https://img.sportsworldi.com/content/image/2025/09/19/20250919507036.jpg",
  userName: "맛있는 쉐프",
  message: "안녕하세요.",
  role: "assistant", // role 에는 assistant(챗봇) 와 user(유저메세지) 가 있다.
};
