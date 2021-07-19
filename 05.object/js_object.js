/*
Object : {key:value, key2:value2 ...}
value : object, array, sring, number, ture, false, null
array : [value1, value2, value3, ...]
*/

const car = {type: "Fiat", model: "500", color: "white"};
console.log("The type of this car is "+ car.type);
console.log("The model of this car is "+ car["model"]);
console.log("The color of this car is "+ car.color);