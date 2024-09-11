/**
 * 함수 타입 표현식
 * function type expression : 공식 명칭
 * (호출 시그니처, 타입 시그니처) : 별칭
 */


type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b;
// 함수 타입을 표현식으로 정의할 때에는 매개변수의 개수와 타입 전부 맞춰주어야 한다.
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 */

type Operation2 = {
    (a: number, b: number): number;
    name: string;
};

// 자바스크립트의 함수도 객체이기 때문

function func(a: number): void {}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

// add2();
add2.name
// 함수처럼 호출 가능, 점표기법으로 사용 가능
// 하이브리드 타입이라고도 불림

