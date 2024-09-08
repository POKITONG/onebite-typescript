// 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "winterlood"];
let boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5]
];
// 튜플
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
// tup1 = [1, 2, 3];
// tup2 = ["1", "2"];
let tup2 = [1, "2", true];
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();
// 타입이 아닌 배열이기 때문에 배열 메서드를 사용할 때 주의해야 한다.
const users = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    // [5, "최아무개"]
];
export {};
// 인덱스의 위치에 넣어야 하는 값들이 이미 정해져 있고 해당 순서가 중요할 때 튜플 타입 사용 가능
