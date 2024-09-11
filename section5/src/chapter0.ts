/**
 * 인터페이스
 */

interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number, b: number): void;
    // sayHi: () => void;
    // sayHi: (a: number, b: number) => void;
    // 오버로드 시그니처를 정의할 때, 함수타입 표현식으로 사용하면 불가능하다.
    // 인터페이스에서 오버로드 시그니처를 정의할 때에는 호출 시그니처를 사용해야 한다.
} //| number &number

type Type1 = number | string | Person;
type Type2 = number & string & Person;

// 타입의 별칭과 달리 인터페이스의 경우 유니온이나 인터셉션 타입을 만들 수 없기 때문에
// 유니온이나 인터셉션 타입을 이용해야 한다면 타입 별칭에 넣어주거나 type 주석에 활용해야 한다.

type Func = {
    () : void;
}

const func: Func = () => {};


const person:Person = {
    name: "이정환",
    sayHi: function () {
        console.log("Hi");
    },

    // person.name = "홍길동"
};

person.sayHi();
person.sayHi(1, 2);