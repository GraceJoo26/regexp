# regexp

정규표현식 (regular expression)

## 역할

- 문자 검색(research)
- 문자 대체(replace)
- 문자 추출(extract)

## 테스트 사이트

https://regexr.com/

## 정규식 생성

```js
//생성자
new RegExp('표현','옵션');
new RegExp('[a-z]', 'gi');

//리터럴
/표현/옵션
/[a-z]/gi
```

## 예제문자

```js
const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aabbccdd
`;
```

## 메소드

| 메소드  | 문법                               | 설명                               |
| ------- | ---------------------------------- | ---------------------------------- |
| test    | `정규식.test(문자열)`              | 일치여부(bullean) 반환             |
| match   | `문자열.match(정규식)`             | 일치하는 문자열의 배열 (array)반환 |
| replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자열을 대체             |
