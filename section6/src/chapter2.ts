/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
    // 필드
    // name: string;
    // age: number;
    // position: string;

    // ? 할당 || 초기값 설정 || 생성자

    // 생성자
    constructor(
        private name:string,
        protected age:number,
        public position:string) {
        // 생성자에도 접근 제어자 작성 가능,
        // 생성자에 접근 제어자를 작성할 경우 해당 생성자를 토대로 필드를 빌드하기 때문에 굳이 필드에 접근 제어자를
        // 작성할 필요 X -> 필드에도 접근 제어자가 선언되어 있으면 오류 발생
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log(`${this.name}일함`);
        // private 접근 제어자는 클래스 내부에서만 접근 가능, 외부에서는 호출도 불가능
    }
}

class ExecutiveOfficer extends Employee {
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber:number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    // 메서드
    func() {
        // this.name;
        this.age
        // 파생 클래스에서도 private 프로퍼티 사용 불가
        // 파생 클래스에서는 사용하고 싶다면 protected 접근 제어자 사용
    }
}

const employee = new Employee("이정환", 27, "developer");
// employee.name = "홍길동";
// readonly 와 달리 읽을수조차 없다.

// employee.age = 30;
employee.position = "designer"

console.log(employee);