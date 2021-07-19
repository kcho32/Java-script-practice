//반복문
/*
  for (초기값; 조건식; 증강식) {
    참일 떄 실행문;
  }

  초기값 -> 조건식 -? 참일때 실행문 -> 증강식 -> 반복

  for (index in 객체,배열) {
    변수는 array의 인덱스가 차례대로 들어간다
    데이터가 존재하는 동안 실행할 실행문
  }

  for (value of 배열,문자열,nodelist){
    데이터가 존재하는 동안 실행할 실행문
    value는 값을 의미 (index 아님)
  }

  */

let arr = ['s', 'b', 'c', 'd', 'e'];
//for loop
for (let i = 1; i < 11; i ++) {
  console.log(i);
}


  for (x in arr) {
    console.log(x)
    console.log(arr[x])
  }

  txt = "";
  const person = {fname:"John", lname:"Doe", age: 25};
  for (let x in person){
    txt += x+" : "+person[x];
  }
  console.log('for in loop array :', txt);

let cars = ['BMW', 'AUDI', 'PORCHE', "GENESIS"]
let carsText="";
for (let x of cars) {   //for (let x in cars) {}
  carsText += x+"\t";   // carsText += cars[x]+"\t";
}             
console.log(carsText);

