'use client';
/*
    원시타입 (Primitive Type)
        하나의 값만 저장하는 타입
        ex) number, string, boolean, null, undefined
 */

// number
let num1: number = 123;
        // ㄴ 타입주석 or type annotation
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// num1 = "hello";
// num1.toUpperCase();

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// str1=123;
// str1.toFixed();

// boolean
let boo1: boolean = true;
let boo2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// let numA: number = null;
// strictNullChecks 옵션으로 null 을 넣을 수 있게 설정할 수 있다.

// 리터럴
// 리터럴 -> 값
let numA: 10 = 10;
// numA = 12;

let strA: "hello" = "hello";

// let boolA: true = false;

