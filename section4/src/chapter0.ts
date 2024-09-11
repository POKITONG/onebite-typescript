/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수르르 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수르르 받고, 어떤 [타입의] 결과값을 반환하는지 이야기

function func(a: number, b: number): number {
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = "이정환", age: number, tall?:number) {
    // 선택적 매개변수는 반드시 필수 매개변수 뒤에 선언되어야 한다.
    console.log(`name: ${name}`);
    if (typeof tall === "number") {
        console.log(`tall: ${tall + 10}`);
    }
}

// introduce(1);
introduce("이정환", 175);
introduce("이정환", 27);

function getSum(...rest:[number, number, number]) {
    // rest 파라미터 문법 : 가변적인 길이의 인수를 전달하면 배열로 묶어서 rest 에 전달
    let sum = 0;
    rest.forEach((it) => sum += it);

    return sum;
}

getSum(1, 2, 3) // 6
// getSum(1, 2, 3, 4, 5) // 15

