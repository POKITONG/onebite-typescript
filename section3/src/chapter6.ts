/**
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이야 함
 */

let num1 = 10 as never;
// 10은 number, never 는 모든 타입의 서브 타입이기 때문에 A는 B의 슈퍼 타입
let num2 = 10 as unknown;
// 10은 number, unknown 은 모든 타입의 슈퍼 타입인 전체 타입이기 때문에 A는 B의 서브 타입
// let num3 = 10 as string;
let num3 = 10 as unknown as string;
// number 는 unknown 의 서브 타입, unknown 은 string 의 슈퍼 타입
// 다중 단언시 타입 단언 가능 (거의 쓸 일 X)

/**
 * const 단언
 */

let num4 = 10 as const;
// 변수를 선언할 때 const 로 선언한 것과 동일한 효과

let cat = {
    name: "야옹이",
    color: "yellow",

} as const;

// cat.name = "야옹이";
// as const 로 단언한 객체는 프로퍼티의 값을 수정할 수 없는 readonly (불변객체) 로 변화

/**
 * Non Null 단언
 */

// 어떤 값이 null 이거나 undefined 가 아니라고 typescript 컴파일러에게 알려주는 역할

type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글1",
    author: "이정환",

};

// const len: number = post.author?.length;
// 옵셔널체이닝: author 의 값이 null 이거나 undefined 일 경우 점표기법으로 접근하면 오류 발생
// ?를 붙여주면 author 프로퍼티의 값이 없을 경우 값 전체가 undefined 가 되도록 만들어주는 연산자
// undefined 로 정의될 수 있음.
const len: number = post.author!.length;
// ! 연산 : non null 단언 연산자
// 해당 값이 !(null || undefined) 라고 typescript 컴파일러가 믿게 해주는 연산자

/**
 * 타입 단언은 실제 해당 타입을 바꿔주지는 않는다.
 * -> 업캐스팅, 다운 캐스팅과는 다름.
 * TypeScript 컴파일러를 속이는 용도 -> 그만큼 위험하기 떄문에 조심히 사용해야 한다.
 */