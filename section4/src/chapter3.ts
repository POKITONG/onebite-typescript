/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
 */

// 버전들 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

//실제 구현부 -> 구현 시그니처
// function func() {};

function func(a:number, b?:number, c?:number) {
    // 오버로드 시그니처들의 매개변수의 개수에 차이가 있다면 필수 매개변수가 아닌 변수들은 선택적 프로퍼티로 정의해야 한다.
    if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    } else {
        console.log(a * 20);
    }
};

// func();
func(1);
// func(1, 2);
func(1, 2, 3);

// 오버로드 시그니처를 만들어 두면 실제 구현부의 시그니처들은 함수 호출 시 영향을 미치지 못한다.