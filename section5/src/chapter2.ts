/**
 * 선언 합침
 */

// type Person = {
//     name: string;
// };

// type Person = {
//     age: number;
// }

interface Person {
    name: string;
}

interface Person {
    // name: number;
    // 인터페이스 선언 합침에서 동일한 프로퍼티를 다른 타입으로 정의하면 충돌이 난다.
    // 서브 타입으로 선언시에도 문제 발생, 반드시 동일한 타입으로 선언해주어야 한다.
    age: number;
}

interface Developer extends Person {
    name: "hello";
}

// 인터페이스는 타입과 타입과 달리 동일한 이름으로 두 개의 인터페이스를 선언해도 문제가 되지 않는다.
// -> 동일한 이름으로 정의된 인터페이스들은 전부 합쳐지기 때문

const person: Person = {
    name: "",
    age: 27,
};

// 간단한 작업에서는 선언 합침 사용 X
// module 보강 등의 작업을 하는 경우 사용

/**
 * 모듈 보강
 */

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello",
};