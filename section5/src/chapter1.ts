/**
 * 인터페이스의 확장
 */

type Animal =  {
    name: string;
    color: string;
}

interface Dog extends Animal {
    name: "hello";
    // 다시 정의하는 타입은 원본 타입의 서브 타입이어야 한다.
    isBark: boolean;
}
// 인터페이스는 객체 타입이면 전부 확장할 수 있다.
// -> 굳이 같은 interface 타입이 아닌 type 객체여도 확장 가능

const dog:Dog = {
    // name: "",
    color: "",
    isBark: true,
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
    name: "hello",
    color: "",
    isBark: true,
    isScratch: true,
};


