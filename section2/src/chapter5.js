// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
// 숫자 자동 할당도 가능
// 숫자형 enum
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
var user1 = {
    name: "이정환",
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korean,
};
var user2 = {
    name: "홍길동",
    role: Role.USER // 1 <- 일반 유저
};
var user3 = {
    name: "아무개",
    role: Role.GUEST // 2 <- 게스트
};
console.log(user1, user2, user3);
