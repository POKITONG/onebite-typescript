/**
 * 프로미스 (promise)
 */

const promise = new Promise<number>((resolve, reject)=>{
    // Promise 는 제네릭 클래스로 선언되었기 때문에 결과값을 제네릭으로 타입 지정을 해줄 수 있지만, 리젝트 타입은 정해줄 수 없다.
    // 타입 정의를 하지 않으면 기본적으로 unknown 으로 정의된다.
    setTimeout(() => {
        // resolve(20);
        reject("~~ 때문에 실패");
    }, 3000);

});

promise.then((response) => {
    console.log(response * 10); // 20
});

promise.catch((error) => {
    // 에러 매개변수의 경우 추론이 불가하기 때문에 타입 좁히기 사용
    if (typeof error === "string") {
        console.log(error);
    }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost() : Promise<Post> {
    // 특별한 경우가 아니면 함수의 반환값 타입으로 Promise 의 타입 설정
    // -> 가독성, 직관적
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "게시글 제목",
                content: "게시글 컨텐츠",
            })
        }, 3000);
    });
}

const postRequest = fetchPost();

postRequest.then((post) => {
    post.id
});