/**
 * infer
 * -> 조건부 타입 내에서 특정 타입만 추론해올 수 있는 기능
 * inference -> 추론하다
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;
// 조건식을 참으로 만드는 R 타입을 반환할 수 있으면 해당 조건식은 참이 된다.

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>;
// 타입 R을 추론 불가 -> 거짓이 돼서 never 가 된다.


type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;


// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string


