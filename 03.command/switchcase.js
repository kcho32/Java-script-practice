//조건문
/*
switch(expression){
  case x:
    실행문1;
    break;
  case y:
    실행문2;
    break;
  case z:
    실행문3;
    break;
}
*/

let month = 21;

switch (month){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(month, "월은 31일까지 있는 달입니다.");
    break;
  case 2:
    console.log(month, "월은 28일까지 있는 달입니다.");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(month, "월은 30일까지 있는 달입니다.");
    break;
  default:
    console.log(month, "월은 없는 달이네요 ... 1~12");
    break;
}
