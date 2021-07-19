// 배열 : 하나의 변수에 여러 데이터를 저장 관리
// arrayName = [value1, value2, value3, ...]
// value : String, number, null, true, false, object, array ...

const arrayOne = ["Saab", "Volvo", "BMW"];
const arrayTwo = new Array("Genesis", "Equus", "Porche")
console.log(`arrayOne = ${arrayOne}, ${typeof arrayOne}\narrayTwo = ${arrayTwo}, ${typeof arrayTwo}.`)
//const->can't change -> value can be changed, but reference cannot be changed
//const arrayOne = ["Genesis", "Volvo", "BMW"]로 reference 자체는 불가능
//BUT!! 안의 value들은 바꾸기 가능
//배열 점근 : index == 0~ length-1, 배열명[index]로 안의 value 접근 가능
//IndexError 주의 (index가 범위를 벗어날 경우)
console.log(arrayOne);
arrayOne[0] = "Genesis";
console.log(arrayOne);
arrayOne[6] = "Genesis";
console.log(arrayOne);
arrayOne.push("Kia");
console.log(arrayOne);
//index로 접근해서 값을 추가하면 중간에 빈 부분은 undefined가 됨 이후, push 같은 걸 써도 undefine 안매꾸어짐



for (let index=0; index<arrayOne.length; index++){
  console.log(`arrayOne[${index}] = ${arrayOne[index]}`);
}

for (index in arrayOne){
  console.log(`using "for in loop" printing arrayOne[${index}] = ${arrayOne[index]}`);
}

for (car of arrayOne){
  console.log(car);
}

//join() method는 배열을 하나의 문자열로 표현해준다.
//default는 ","다.
console.log(arrayTwo.join())
console.log(arrayTwo.join(""))
console.log(arrayTwo.join("-"))

//push(value)  배열 마지막 순서에 value를 넣어준다
//pop() : pop은 마지막 index의 값을 return 해주면서 배열 안에서 삭제한다. (꺼내온다는 개념?)

const arrayThree = new Array("one", "two", "three")
//arrayThree.pop() 만약 pop을 써서 array 아무것도 안남았을 때 아래 명령어를 쓰면 return값은 undefied가 나온다.
{
  console.log(`\nreturn of pop : ${arrayThree.pop()}\narray after return : ${arrayThree}`)
}
{
  console.log(`\nreturn of push : ${arrayThree.push("four")}\narray after return : ${arrayThree}`)
}

//배열 삭제 : delete
delete arrayThree[arrayThree.length-1];
console.log(`length -1 마지막 index element 삭제 후 : ${arrayThree}`);


//splice(startIndex, deleteCount, intemList);
//주어진 배열의 index에 삭제와 추가 삽입이 가능한 메소드이다.
arraySplice = ['one', 'two', 'three', 'four', 'five'];
arraySplice.splice(1, 2, "six", "seven", "eight");
console.log(arraySplice)
// Index 1 부터 2개의 element 삭제하고 index 1 부터 'six', 'seven' 삽입하라.


//splice example2

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months+"\n");
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

//concat : 두 배열을 합치는 메소드
//push는 reference는 유지되면서 안의 value에 추가가 되는거지만 (기존배열의 length 변경)
//concat는 value가 추가 되는 것이 아니라 새로운 배열을 리턴한다. (기존배열은 유지)
//따로 저장해서 새로운 reference를 주던가 해야된다.

const arrayConcatOne = ["one", "two", "three"];
const arrayConcatTwo = ["four", "five", "six"];
const concatedArray = arrayConcatOne.concat(arrayConcatTwo);
console.log(concatedArray)

//slice(startIndex, endIndex) : startIndex ~ endIndex -1 의 데이터(value)를 복사한다.
//원본은 유지 (reference, value 둘 다)
//endIndex는 optional/

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

//slice == shallow copy -> 배열 안의 value가 또 배열일 수 있기 때문에
//A 안에는 B라는 배열들의 주소가 있다
//C 에 slice로 A를 복사한다면, C 또한 B라는 배열들의 주소가 복사가 된다.
//따라서 B 안의 배열들의 value를 수정을하면
//C의 B 안의 배열들의 value 또한 변하게 된다. 따라서 이를 해결하기 위해 decopy를 이용해야 한다.

//sort() : 오름차순으로 정렬 
//reverse() : 순서 반전 1 3 2 4 5 -> 5 4 2 3 1
//sort() then reverse() 내림차순



//forEach() : 배열 for loop로 처리
arrayOne.forEach(numbers => console.log(`forof loop : ${numbers}`))