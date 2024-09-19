/**
 * keyof 연산자
 */

/*interface Person {
    name: string;
    age: number;
}*/

type Person = typeof person;
// person 변수의 타입을 추론해서 Person 타입 별칭으로 정의해준다.

function getPropertyKey(person: Person, key: keyof typeof person) {
    // keyof Person : Person 객체 타입의 모든 property 키를 union 타입으로 추출
    // 무조건 타입에만 사용할 수 있는 연산자, 뒤에 타입이 와야 한다.
    return person[key];
}

const person = {
    name: "이정환",
    age: 27,
};


getPropertyKey(person, "name"); // 이정환
