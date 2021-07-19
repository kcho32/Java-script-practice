//Array Iteration
//forEach(callback(element, index(optional), array)) : 반복을 통해 데이터 검색
//
const array1 = [10, 20, 30];
array1.forEach((element, index ) => console.log(`array1[${index}] = ${element}`));
//for (element of array1) console.log(element);

//*map(callback(element, index, array)); : 반복을 통해 데이터 처리 후 새로운 배열 리턴
let array2 = array1.map(element =>  element*2);
console.log(`array1: ${array1} \narray2: ${array2}`);


//filter())

const numbers = [45, 4, 9, 16, 25];

//풀어서 쓴
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//줄여서도 가능

const over19 = numbers.filter(num => num > 19);
console.log(`19보다 큰 수: ${over19}`);




//reduce() : 배열의 각 element를 조절하는 함수를 이용해 element수를 줄인 값(value)을 리턴
//*reduce(callback(accumulator, element, index, value)
const numbersReduce = [45, 4, 9, 16, 25];
let sum = numbersReduce.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}



//짧게 줄여서 initial value = 0
let sumShort = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)
console.log(sumShort)