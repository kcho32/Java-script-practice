let Car = {
  name: "Ford",
  age: 14,
  
  info2: function() {
    console.log("age");
  },
  
  get info() {
    return this.age;
  }

};

Car.info2();
console.log(Car.info);

