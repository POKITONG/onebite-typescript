/**
 * unknown 타입
 */

function unknownExam() {
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknowVar: unknown;

    // let num: number = unknowVar;
    // let str: string = unknowVar;
    // let bool: boolean = unknowVar;

}

/**
 * Never 타입 -> 공집합
 */

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;

}

/**
 * void 타입
 */

function voidExam() {
    function voidFunc(): void {
        console.log("hi");
        return undefined; // -> undefined 타입의 슈퍼타입이기 때문에 리턴 가능
    }
}

let voidVar: void = undefined;

/**
 * any
 * 모든 타입의 슈퍼 타입이자 서브 타입 -> 네버 제외 (치트키)
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;
    // anyType 한정으로 unknown 타입도 any 타입으로 다운캐스팅 가능

    undefinedVar = anyVar;
    // any 타입은 본인에게 하는 다운캐스팅, 본인이 하는 다운캐스팅 전부 가능
    // 위험하기 때문에 웬만해서는 사용 X

    // neverVar = anyVar;
}
