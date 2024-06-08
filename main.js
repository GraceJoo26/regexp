console.log(123);

let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aabbccdddd
http://naver.com
동해물과_백두산이 마르고 닳도록
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

console.log(str.match(/[fox]/g)); //str에서 f나, o나, x 를 찾음
console.log(str.match(/[0-9]{1,}/g)); //str에서 0-9숫자중 1개 이상~ 묶음 찾음
console.log(str.match(/[가]/g)); //str에서 가 를 찾음 -->null
console.log(str.match(/\w/g)); //str에서 영문, 숫자, _ 찾음
console.log(str.match(/\bf\w{1,}\b/g)); //boundary (띄어쓰기, 특수문자 등) 사이의 f로 일치하는 단어 1개이상~ 묶음단어 있으면 그것을 찾음
console.log(str.match(/\d{1,}/g)); //1개 이상 숫자 덩어리 찾기
console.log(str.match(/\s/g)); //1개 이상 숫자 덩어리 찾기

// \s 사용방법
const h = `
  hello    world   !!!   
`;

console.log(h.replace(/\s/g, ""));

console.log(str.match(/.{1,}(?=@)/g)); // @ 앞의 문자열 일치
console.log(str.match(/(?<=@).{1,}/g)); //@ 뒤의 문자열 일치
