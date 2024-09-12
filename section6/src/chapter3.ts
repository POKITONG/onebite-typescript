/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Character implements CharacterInterface {

    constructor(public name: string, public moveSpeed: number, private extra: string) {
        // 필드 자동 생성을 하려면 반드시 접근 제어자를 선언해주어야 한다!
        // 인터페이스로 정의하는 필드들은 무조건 퍼블릭
        // 인터페이스는 무조건 public 필드만 정의할 수 있기 때문에 private 필드가 필요하다면 구현체에 따로 정의해 주어야 한다.
    }

    move() : void {
        console.log(`${this.moveSpeed} 속도로 이동@`);
    }
}