/**
 * 타입스크립트의 클래스
 */

const employee = {
    name: "이정환",
    age: 27,
    position: "developer",
    work() {
        console.log("일함");
    },
};

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // ? 할당 || 초기값 설정 || 생성자

    // 생성자
    constructor(name:string, age:number,position:string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("일함");
    }
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber:number) {
        super(name, age, position);
        // 타입스크립트는 자바스크립트와 달리 파생 클래스의 생성자는 반드시 super 호출을 포함해야 한다.
        // 생성자가 슈퍼클래스의 생성자와 다를 경우 오류가 발생
        this.officeNumber = officeNumber;
    }
}

const employeeB = new Employee("이정환", 27, "개발자");
console.log(employeeB);

// 클래스는 자바스크립트의 클래스이자 동시에 타입으로도 취급된다.

const employeeC :Employee = {
    name: "",
    age: 0,
    position: "",
    work() {
        console.log("일함");
    },
}

// 타입스크립트는 구조적 타입 시스템이기 때문에 변수가 클래스와 구조적으로 타입이 맞으면 해당 타입이라고 인식한다.