//조건문
/*
  if (조건식1) {
    실행문1
  }else if (조건식2) {
    실행문2
  }else {
    실행문3
  }
*/

let month = 21;
if (month==1 || month == 3 || 
    month ==5 || month == 7|| 
    month == 8 || month == 10 || month == 12) {
      console.log(month, "월은 31일까지 있는 달입니다.")
}else if (month == 2) {
      console.log(month, "월은 28일까지 있는 달입니다.")
}else if (month==4 || month == 6 || 
          month ==9 || month == 11) {
      console.log(month, "월은 30일까지 있는 달입니다.")
}else {
      console.log(month, "월은 없는 달이네요 ... 1~12")
}