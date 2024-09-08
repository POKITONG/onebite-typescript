// 타입 별칭

type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

function func() {
    type User = {};
}

let user: User = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시"
};

let user2:User = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시"
};

// 인덱스 시그니처
type CountryCodes = {
    [key : string] : string;
}

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
    // 인덱스 시그니처에서 추가적인 프로퍼티를 정의하려면 반드시 해당 프로퍼티의 Value 타입이 인덱스 시그니처의 Value 타입과
    // 일치하거나 호한되어야 한다.
};

// 인덱스 시그니처는 해당 타입의 규칙을 위반하지만 않으면 모든 것을 넣을 수 있다.
// 그래서 해당 객체의 프로퍼티가 없으면 위반할 프로퍼티도 없으므로 타입 오류가 나지 않는다.

let countryNumberAndStringCodes: CountryNumberCodes = {
    // Korea: "ko",
    Korea: 82,

};

