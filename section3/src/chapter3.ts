/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;
// num2 = num1;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string;
    color: string;
}

type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal: Animal = {
    name: "기린",
    color: "yellow"
}

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};

animal = dog;

// dog = animal;

// 객체 타입들은 property 를 기준으로 슈퍼서브타입 관계를 가진다.
// 타입스크립트는 property 를 기준으로 타입을 정의하는 구조적 타입 시스템을 가진다.


type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book;
let programingBook: ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
};

book = programingBook;
// programingBook = book;

/**
 * 초과 프로퍼티 검사
 */

type Book = {
    name: string;
    price: number;
};

let book2: Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs",
};

// 변수를 초기화할 때 초기화하는 값으로 객체 리터럴을 사용하면 발동하는 검사
// 객체 타입 변수를 초기화할 때 객체 리터럴을 사용하면 실제 타입에는 정의해놓지 않은 초과 프로퍼티르 작성하면
// 안 되도록 막는다.

let book3: Book = programingBook;

function func(book: Book) {}
func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs",
})

// 함수를 정의하고 함수의 인수로 객체 리터럴을 전달하면 초과프로퍼티 검사가 발동한다.

func(programingBook);

// 서브타입 객체를 넣을 때는 객체 리터럴 사용X
// 변수에 저장 후 인수로 전달