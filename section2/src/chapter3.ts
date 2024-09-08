// object
let users: object = {
    id: 1,
    name: "이정환",
};

// user.id;
// typescript 의 object 라는 타입은 아무 정보가 없어서 해당 객체 내부의
// id를 찾을 수 없음

// 객체 리터럴 타입
let user: {
    id?: number; // 선택적 property, optional property
    name: string;
} = {
    id: 1,
    name: "이정환"
};

user.id;

let dog: {
    name: string;
    color: string;
} = {
    name: "돌돌이",
    color: "brown",
}
// 구조적 타입 시스템 -> property based type system
// C | java : 명목적 타입 시스템

user = {
    name: "홍길동",
};

let config: {
    readonly apiKey: string;
    // readonly: 읽기 전용 property
} = {
    apiKey: "MY API KEY",
}

// config.apiKey = "hacked";