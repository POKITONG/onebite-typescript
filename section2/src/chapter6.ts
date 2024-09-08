// any
// 특정 변수의 타입을 확실히 모를 떄

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {
};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
// num = anyVar;



// 애니 타입은 타입 검사를 하지 않는 것과 같음.
// 그래서 에러가 런타임 때 발생


// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar;

if (typeof unknownVar === "number") {
    num = unknownVar;
}
// 타입 정제

// 변수에 들어갈 값이 확실하지 않을 때는 any 보다는 unknown 사용
