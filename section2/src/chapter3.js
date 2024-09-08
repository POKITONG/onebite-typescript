// object
let users = {
    id: 1,
    name: "이정환",
};
// user.id;
// typescript 의 object 라는 타입은 아무 정보가 없어서 해당 객체 내부의
// id를 찾을 수 없음
// 객체 리터럴 타입
let user = {
    id: 1,
    name: "이정환"
};
user.id;
let dog = {
    name: "돌돌이",
    color: "brown",
};
// 구조적 타입 시스템 -> property based type system
// C | java : 명목적 타입 시스템
user = {
    name: "홍길동",
};
let config = {
    apiKey: "MY API KEY",
};
export {};
// config.apiKey = "hacked";
