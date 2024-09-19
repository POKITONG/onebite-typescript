/**
 * Pick<T, K>
 *     -> 뽑다, 고르다
 *     -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
    // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
    // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
    [key in K]: T[key]
};

const legacyPost: Pick<Post, "title" | "content"> = {
    title: "옛날 글",
    content: "옛날 컨텐츠",
};

/**
 * Omit<T, K>
 *     -> 생략하다, 빼다
 *     -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = "title"
// Pick<Post, Exclude<keyof Post, "title">
// Pick<Post, Exclude<"title" | "content" | "tags" | "thumbnailURL", "title">>
// Exclude : 분산적인 조건부 타입 때 사용 -> 두 개의 타입 변수를 받고 앞에 전달한 타입 변수에서 뒤에 전달한 타입 변수를 제거
// Pick<Post, "content" | "tags" | "thumbnailURL" >


const noTitlePost: Omit<Post, "title"> = {
    content: "",
    tags: [],
    thumbnailURL: "",
};

/**
 * Record<K, V>
 *     -> 인덱스 시그니처처럼 유연하지만, 조금 더 제한적인 타입
 */

/*type ThumbnailLegacy = {
    large: {
        url: string;
    };
    medium: {
        url: string;
    };
    small: {
        url: string;
    };
    watch: {
        url: string;
    };
}*/

type Record<K extends keyof any, V> = {
    // K에 들어오는 타입은 어떤 객체 타입의 키를 추출해 놓은 유니온 타입이라는 것을 의미
    [key in K]: V
}

type Thumbnail = Record<"large" | "medium" | "small" | "watch", { url: string, size: number; }>;

// Record : 객체 타입을 만들어주는 유틸리티 타입
// 첫번째 변수 : 객체의 property key
// 두번째 변수 : key 들의 value