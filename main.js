console.log(123);

const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aabbccdd
`;

//생성자
const regexp = new RegExp("the", "gi");
console.log(str.match(regexp));

//리터럴
const regexp2 = /the/gi;
console.log(str.match(regexp2));

//test

const regexp3 = /fox/gi;
console.log(regexp3.test(str));
