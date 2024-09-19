/**
 * 맵드 타입
 */

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    // 맵드 타입은 인터페이스에서는 만들 수 없고 타입 별칭 내에서만 생성 가능

    [key in "id" | "name" | "age"]?: User[key];
    // 앞의 대괄호 : 인덱스 시그니처와 마찬가지로 객체의 property 키가 무엇이 될 수 있는지 정의
    // -> 인덱스 시그니처와 달리 : 이 아닌 in 연산자 사용
    // conon 뒤 : 해당 property 들이 어떤 value 타입을 가질 것인지 정의
    // -> 인덱스드 엑세스 타입
}

type BooleanUser = {
    // [key in "id" | "name" | "age"]?: boolean
    [key in keyof User]: boolean;

};

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser():ReadonlyUser {
    // ...기능
    return {
        id: 1,
        name: "이정환",
        age: 27,
    }
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user:User) {
    // ... 수정하느 기능
}

updateUser({
    id:1,
    name: "이정환",
    age: 25,
})