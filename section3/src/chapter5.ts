/**
 * 타입 추론
 */

// function func(param) {
//
// }

let a = 10;
// 점진적 타입 추론
let b = "hello";
let c = {
    id: 1,
    name: "이정환",
    profile: {
        nickname: "winterload",
    },
    urls: ["https://wintrlood.com"],
};

let {id, name, profile} = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}


// any 타입의 진화
let d;
// 암묵적 any 타입으로 추론
d = 10;
// any -> number
d.toFixed();
// 여기까지는 number
// d.toUpperCase();

d = "hello";
// number -> string
d.toUpperCase();
// d.toFixed();

const num = 10;
// const 로 선언하면 리터럴 타입으로 추론

const str = "hello";

let arr = [1, "string"];