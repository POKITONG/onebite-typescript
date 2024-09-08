'use client';
/*
    원시타입 (Primitive Type)
        하나의 값만 저장하는 타입
        ex) number, string, boolean, null, undefined
 */
// number
let num1 = 123;
// ㄴ 타입주석 or type annotation
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// num1 = "hello";
// num1.toUpperCase();
// string
let str1 = "hello";
let str2 = 'hello';
let str3 = `hello`;
let str4 = `hello ${num1}`;
// str1=123;
// str1.toFixed();
// boolean
let boo1 = true;
let boo2 = false;
// null
let null1 = null;
// undefined
let unde1 = undefined;
// let numA: number = null;
// strictNullChecks 옵션으로 null 을 넣을 수 있게 설정할 수 있다.
// 리터럴
// 리터럴 -> 값
let numA = 10;
// numA = 12;
let strA = "hello";
export {};
