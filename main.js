console.log(123);

let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aabbccdddd
http://naver.com
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
//str = str.replace(regexp3, "grace");

console.log(str.replace(regexp3, "grace"));
console.log(str);

console.log(str.match(/the/gim));
console.log(str.match(/d$/gim));
console.log(str.match(/^t/gim));

console.log(str.match(/h..p/g));
console.log(str.match(/fox|dog/g));
console.log(str.match(/https?/g)); //?앞의 s 가 있을수도 없을수도

console.log(str.match(/\b\w{2,3}\b/g));
