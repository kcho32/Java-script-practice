class Car {
  constructor(name,year) {
    this._name = name;
    this._year = year;
  }

//실행시 class 명령문이 에러를 일으키면 es6가 아닌거임
  age() {
    let date = new Date();
    return date.getFullYear() - this._year;
  }

  get name() { //get : 기존에 해당하는 값을 리턴
    return this._name;
  }

  getName(){
    return this._name;
  }

  setName(name) {
    this._name = name;
  }

  set name(name) { //set : 새로운 값 지정
    this._name = name; //member 변수 low dash. this.name하면 이상하게 계속 자기 자신의 set을 무한적으로 불러오기 때문에
                       //다른 이름을 준 것이다. low dash _를 쓰는 것은 관습
  }


}


let myCar = new Car("Ford", 2014);
console.log(`My car is ${myCar.age()} years old.`);

myCar.name = "Tesla";
console.log(`My car changed : ${myCar.name}`);

myCar.setName("Porche");
console.log(`My car changed : ${myCar.getName()}`);
