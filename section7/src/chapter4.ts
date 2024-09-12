/**
 * 제네릭 클래스
 */

class List<T> {
    constructor(private list: T[]) {};

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const numberList = new List([1, 2, 3]);
// 제네릭 클래스는 제네릭 interface 혹은 제네릭 type 변수와는 다르게 클래스를 호출할 때 생성자의 인수를
// 기준으로 타입을 추론하기 때문에 따로 List<number>([1,2,3]) 처럼 타입을 지정해주지 않아도 된다.
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["안녕", "하살법!"]);
stringList.pop();
stringList.push("하살법 받아치기!");
stringList.print();