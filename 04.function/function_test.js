// 함수정의
// function functionName(parameterList){
//   구현
//   return 함수호출하는 쪽에 전달할 데이터;
// }

function add(data1, data2){
  //console.log(carName); 바로 출력을 원할시
  localVariable = 50
  let localVariable2 = 100
  return data1+" + "+data2+" = "+(data1+data2);
}

// 함수 호출(사용)
// 변수명 = 함수명(argumentList);
// argumentList는 함수 정의된 parameterList와 갯수 일치
let sum = add(10,20);
console.log(sum);
//console.log(data1); data1은 local variable이기 때문에 함수 호출이 끝나고
// 사라졌다. 그래서 data1을 출력하면 undefined 에러가 나오게 된다. (reference error)

console.log(typeof localVariable)
//출력이 되는 이유: let const를 안쓰면 var로 써지기 때문이다. var는 local에서 선언해도 global로 사용 가능 
console.log(typeof localVariable2)
//let으로 선언했기 때문에 undefine이 나옴




//2. Arrow Function(함수의 이름이 없는 경우: 일회성으로 사용할 시 이름 필요 없다)
// arrow function( =>) 사용 가능 문법이 심플해진다. "람다함수"라고 부르기도..
// 주의 해야 할 점은 이 방법은 ES6에서부터 적용이 된다!!!! 중요~ 버전 확인

// function functionName(parameterList){
//   구현
//   return 함수호출하는 쪽에 전달할 데이터;
// } 
// 이 함수를
// 변수명 = (parameterList) => returnData; 로 변환 가능 (한줄일때)

let hello;
hello = (val) => "Hello "+val;
console.log(hello("World!"));


//3. 일급함수: 함수를 변수로 사용 가능!?