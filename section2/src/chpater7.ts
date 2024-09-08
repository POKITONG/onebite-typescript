// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
    return "hello";
}

function func2():void {
    console.log("hello");
}

// 타입을 null | undefined 로 정의하면 해당 객체는 반드시 null | undefined 를 반환해야 한다.
// || return;

let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined;
// strictNullChecks 를 끄면 null 이 들어갈 수 있다.


// never
// never -> 존재하지 않는
// 불가능한 타입

function func3():never {
    while (true) {}
}

// 절대로 정상적으로 종료될 수 없어 해당 함수에 반환값이 있는 것 자체가 모순일 때 사용

function func4():never {
    throw new Error();
}

let b: never;
// b = 1;
// b = {};
// b = "";
// b = undefined;
// b = null;
// b = anyVar;
// strictNullChecks 옵션을 꺼도 null 할당 불가