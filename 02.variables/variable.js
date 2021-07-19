var v;
let l;

console.log("할당 전 변수 값: ", l);

v=10;
l=20;
l=30;
var v;
console.log("할당 후 변수 값: ", l, typeof(l));

let z = v+l;
console.log("변수 선언과 동시에 값 할당: ",z);

y=30;
console.log("변수 선언 없이 바로 값 할당: ",y, typeof(y));

//var 타입은 요즘 왠만하면 쓰지 않는다. Deplicate 직전이므로 그냥 쓰지 말자
//let 왠만하면 이걸 쓰자. ES6에서 쓰이는 것.

//변수명은 -, alphabet, $로 시작해야한다
//명령문은 변수명이 될 수 없다
//대소문자 구분한다
//등 다른 언어와 거의 같다고 보면 된다

//let으로 선언하고 값을 주었을 때, 다른 값으로 변경 못한다.
//Class는 upper cammel(pascal) AbcDef
//이외의 것은 abcDef 등 lower cammel 쓴다 띄어쓰기를 대문자로 사용
//unicode 쓴다 ASCII(1byte) 안씀 (자바스크립트) 아스키코드는 영어 숫자만 표현
//유니코드는 2byte를 써서 다른 언어까지 사용 가능
// z = 17 은 syntax에러가 일어난다. 위에서 이미 z가 선언되고 값이 주어졌기 때문이다
z=100; // 이렇게만 쓰면 변수 선언은 아니고 변경하는 것

//global variable
var gv = 50;
let globalVariable=50;

//local variable
{
  var gv = 100
  console.log("글로벌 베리어블",globalVariable)
}

console.log("global variable : ver 선언", gv); //로컬로 변화준게 최종
console.log("global variable : let", globalVariable);//글로벌 변수로 유지


const PI = 3.141592;//값을 변경 못하는 상수
/*const PI2;
PI2 = 3.14 //불가능 에러 일으킴*/

const cars = ['Saab', 'Volvo', 'BMW']
// cars라는 상수는 Saab, Volvo, BMW라는 strings를 가지고 있는 주소를 가지고 있다
//cars.push("Audi") 나 cars[0]='Toyota' 등으로 안의 내용을 바꿀수는 있다. 다만 주소가 바뀌는게 아니기 때문
//cars = ["Toyota", "Volve", "Audi"] 이런 식으로 값을 다시 주지는 못한다.

const car = {a: 'Saab', b:'Volvo', c:'BMW'}
car.a="hi";
car.b="can change";
car.c="hahaha";

console.log(car)


const arr = [10,20,30,40,50]
console.log("before: ",arr)

arr[0]=5
console.log("after: ",arr)

//arr = [5,20,30,40,50] 불가하다

const obj = {"a": 'Saab', b:'Volvo', c:'BMW'}
obj.d="Tesla"
obj["a"] = "Genesis"
obj["e"] = "Nio"
console.log("after: ",obj, obj["b"])