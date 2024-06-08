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

## 플래그

| 플래그 | 설명                                         |
| ------ | -------------------------------------------- |
| g      | 모든 문자 일치                               |
| i      | 영어 대소문자를 구분 않고 일치 (ignore case) |
| m      | 여러 줄 일치 (multi-line)                    |

## 패턴(표현)

| 패턴       | 설명                                               |
| ---------- | -------------------------------------------------- |
| ^ab        | 줄(line) 시작에 있는 ab와 일치                     |
| ab$        | 줄(line) 끝에 있는 ab와 일치                       |
| .          | 임의의 한 문자와 일치                              |
| a&verbar;b | a 또는 b 와 일치                                   |
| ab?        | b가 없거나 b와 일치                                |
| {3}        | 3개 연속 일치                                      |
| {3,}       | 3개 이상 연속 일치                                 |
| {3,5}      | 3개 이상 5개 이하 연속 일치                        |
| [abc]      | a or b or c                                        |
| [a-z]      | a부터 z사이의 문자구간에 일치(영어소문자)          |
| [A-Z]      | A부터 Z사이의 문자구간에 일치(영어대문자)          |
| [0-9]      | 0부터 9까지의 숫자구간에 일치(숫자)                |
| [가-힣]    | 가부터 힣까지의 문자구간에 일치(문자)              |
| \w         | 63개 문자(word, 대소영문 52개+숫자10개+\_)에 일치, |
| \b         | 63개 문자에 일치하지 않는 경계(boundary)           |
| \d         | 숫자에(Digit) 일치                                 |
| \s         | 공백(Space,Tab등)에 일치                           |
