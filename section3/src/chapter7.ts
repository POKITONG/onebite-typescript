/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
    name: string;
    age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
    value;
    // value.toUpperCase();
    // value.toFixed();

    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    // else if (typeof value === "object") {
    //     console.log(value.getTime());
    // }
    else if (value instanceof Date) {
        // instanceof : 왼쪽의 값이 오른쪽의 인스턴스인지 확인하는 연산자
        console.log(value.getTime());
    } else if (value && "age" in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`);
        // instanceof 는 오른쪽의 값에 클래스가 와야 한다.
    }
    // typeof 연산자들과 함께 조건문을 통해 타입을 좁힐 수 있는 표현들을 타입 가드라고 명명
}


