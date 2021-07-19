let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("txt 문자열 길이 : ",txt.length)
console.log(`${txt} 문자열 길이 : ${txt.length}`)

//String methods
let str = "Apple, Banana, Kiwi";
let cuttedStr = str.slice(7,13); // index는 0부터 시작하고 이 명령문은 string의 index 7부터 12까지의 저장
console.log(cuttedStr);

console.log(`substring : ${str.substring(7, 13)}`);

//substring vs slice
// index 다루는데에 차이가 있다
// slice의 경우는 만약 시작 인덱스의 절대값이 크면, 출력이 없다.
// substring의 경우는 출력 가능
console.log(`substring : ${str.substring(13, 5)}`);
console.log(`slicing : ${str.slice(13, 5)}`);


//2. String Search
// indexOf(serchvalue) : 검색한 첫번째 인덱스 return
// indexOf(searchTerm, startingPoint)은 시작 인덱스를 정하는 것.
// lastIndexOf(searchValue) : 검색한 마지막번째 인덱스 return
//

let strIndexTest = "Please locate where 'locate' occurs! locate";
console.log(`${strIndexTest} indexOf locate검색 : ${strIndexTest.indexOf('locate')})}`);
console.log(`${strIndexTest} indexOf locate검색 : ${strIndexTest.indexOf('locate', 8)})}`);
console.log(`${strIndexTest} lastIndexOf locate검색 : ${strIndexTest.lastIndexOf('locate')}')}`);

//string.search() 도 해당 인덱스를 찰려준다. 다만 첫번째만 하고 끝
//웬만하면 정규표현식 찾을때 사용?


//정규표현식 예시
let text = "The rain in SPAIN stays mainly in the plain"; 
console.log(text.match(/ain/g));
console.log(text.match(/ain/gi));

//String.search string.match로 정규표현식 예를 들겠음
//g: 글로벌, i: 대소문자 구분 안함
//search(regxp): 해당 정규식 조건에 맞는 첫번재 인덱스, 없으면 -1 return
//match(regxp):  정규표현식 검색 배열 또는 null return

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked, was it really laxy?';
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex));
console.log(paragraph[(paragraph.search(regex))]);
console.log(paragraph.match(regex));

const regesObject = new RegExp(/[^\w\s]/,'g') //'g'는 optional
//보통은 객체 생성 안하고 /[^\w\s]/g의 형식으;로 많이 쓴다
//아니면 new RegExp(/[^\w\s]/,'g') string 넣지 말고 정규표현식 그대로 넣어서

//RegExp('foo*', 'g') == /foo*/g
results = regex.exec(paragraph);  
console.log(typeof results);//object
console.log(results instanceof Array);//오브젝트가 array 형식으로 나오냐? True

for (index in results){
  console.log(index[0])
}

//include : 포함여부 검색하는 기능
//str.include(searchTerm) - true || false return

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';

// true 면 is, false면 is not이 출력 된다
//Template Literal ``(back ticks) - \n, '', "", ${변수}, ${표현식}을 문자열로 사용 가능
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);







