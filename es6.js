const user = {
  isLoggedIn: true,
  role: "user", // 'guest', 'admin' 값이 있을 수 있음
};

// 관리자 페이지 접근 로직
if (user.isLoggedIn && user.role === "admin") {
  console.log("👍 접근가능");
} else {
  console.log("❌ 접근불가");
}

// 일반 페이지 접근 로직
if (user.isLoggedIn || user.role === "admin") {
  console.log("👍 접근가능");
} else {
  console.log("❌ 접근불가");
}

//
if (!user.isLoggedIn) {
  // 로그인되지 않은 사용자인 경우 (앞에 !를 붙임으로 결과의 반대값을 true로 인식하게 함)
  console.log("로그인 해주세요!");
}

//Default Parameter
const sayhello = (username = "사용자", usermbti = "AAAA") => {
  //실행할 로직들 넣기
  // console.log("반갑습니다. " + username + "님" + "MBTI는 " + userbmti + "이시군요");
  // 백틱 : 문자열과 변수를 손쉽게 이어주는 문법
  console.log(`반갑습니다. ${username}님 MBTI는 ${usermbti}이시군요!`);
};

sayhello("우재현", "ESFP");
sayhello("후츠릿");

// Object Destructuring(구조분해할당)
// 재료 목록 데이터
const ingredients = ["김치", "버섯", "계란", "양배추"];

// const first = ingredients[0]
// const second = ingredients[1]
// const third = ingredients[2]

//구조분해할당
const [first, second, third] = ingredients; // 배열구조이기 때문에 변수에 들어가는 순서가 중요함
console.log("🚀 ~ first:", first);
console.log("🚀 ~ second:", second);
console.log("🚀 ~ third:", third);

const todoItem = {
  todo: "React 학습하기",
  isComplete: false,
};

// const { todo, isComplete } = todoItem;
// console.log("🚀 ~ todo:", todo);
// console.log("🚀 ~ isComplete:", isComplete);

const { isComplete, todo: text } = todoItem;
console.log("🚀 ~ todo:", text);
console.log("🚀 ~ isComplete:", isComplete);

const copyIngredients = ["방울토마토", ...ingredients];
console.log("🚀 ~ copyIngredients:", copyIngredients);

const copyTodoItem = {
  ...todoItem,
  description: "React 공부 할거에요", // 없는 데이터는 추가가 되고
  isComplete: true, // 있는 데이터는 추가로 입력한 값으로 수정이 된다.
};
console.log("🚀 ~ copyTodoItem:", copyTodoItem);
