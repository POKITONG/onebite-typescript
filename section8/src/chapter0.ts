/**
 * 인덱스드 엑세스 타입
 * -> 다른 타입의 특정 property 의 타입을 추출하는 타입
 */

/*interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    };
}*/

type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

function printAuthorInfo(author: PostList[number]["author"]) {
    console.log(`${author.name} - ${author.id}`);
    // 원본 타입의 property 가 변경되거나 수정되었을 때도 추가적인 작업을 해주지 않아도 되어서 편리
    // 인덱스를 이용해서 property 에 접근하기 때문에 인덱스드 엑세스 타입

    // 주의사항 :
    // 1. 인덱스에 들어가는 문자열은 값이 아니라 타입이다. (string X)
    // 2. property 내의 property 에 접근하고 싶으면 중첩으로 스퀘어를 사용하면 된다. ["author"]["id"]
}

const post: PostList[0] = {
    // 배열의 타입을 가져올 때, 배열 내부에 number 타입을 적어주면 하나의 요소의 타입만 추출할 수 있다. (어떠한 숫자를 넣든 상관 X)
    // 인덱스 내부의 값은 리터럴 타입 값 X

    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이정환",
        age: 27,
    },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3];

type TupNum = Tup[number];
// 튜플 타입 내의 모든 타입의 최적의 공통 타입으로 타입 설정
// 세 타입의 유니온 타입으로 추출



