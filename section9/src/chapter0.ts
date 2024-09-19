/**
 * 조건부 타입
 * -> 삼항연산자를 이용해 조건에 따라서 타입을 결정하는 문법
 */

type A = number extends string ? string : number;

type ObjA = {
    a: number;
}

type ObjB = {
    a: number;
    b: number;
}


type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces(text: any) {
    if (typeof text === "string") {
        return text.replaceAll(" ", "") as any;
    } else {
        undefined;
    }
    // 해당 문자열에서 첫번째 인수에 해당하는 모든 인수들을 찾아서 두번째 인수로 바꿔주는 메서드
}

let result = removeSpaces("hi im winterlood");
result.toUpperCase();

let result2 = removeSpaces(undefined);
