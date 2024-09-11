/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준 1. 반환값이 호환되는가

type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// : 반환값 기준으로 업캐스팅
// b = a; : 반환값 기준으로 다운캐스팅

// 함수 타입 간의 호환성을 평가할 때 반환값끼리의 다운캐스팅이 되면 반환값 호환이 되지 않는다고 판단한다.

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d:D = (value) => {};

// c = d;
// D 타입을 C 타입으로 취급하겠다는 것과 같음. => 업캐스팅
d = c;
// 매개변수를 기준으로 호환성을 체크할 때는 다운캐스팅은 가능하지만, 업캐스팅은 불가하다.


type Animal = {
    name: string;
};

type Dog = {
    name: string;
    color: string;
};

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// animalFunc = dogFunc;

let testFunc = (animal: Animal) => {
    console.log(animal.name);
    // console.log(animal.color);
};

dogFunc = animalFunc;

let testFunc2 = (dog: Dog) => {
    console.log(dog.name);
};


// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;