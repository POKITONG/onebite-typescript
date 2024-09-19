/**
 * 분산적인 조건부 타입
 * -> 조건부 타입을 유니온 타입과 함께 사용할 때 조건부 타입이 분산적으로 동작하게 업그레이드 되는 문법
 */


type StringNumberSwitch<T> = [T] extends [number] ? string : nubmer;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> | -> string
// StringNumberSwitch<string> -> number

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 결과
// number | string

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean |

// 결과
// number | never | boolean
// 유니온 타입에 never 타입이 들어있으면 never 는 사라진다 -> never 타입은 공집합 타입이기 때문

// number | boolean

type Extract<T, U> = T extends U ? string : never;

type B = Extract<number | string | boolean, string>;

// 1단계
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

// string | never | never

// 최종 결과
// string