/*
continue : 실행문 실행하지 않고 loop로 돌아가기
return : 함수 빠져나가기
break : 명령문 빠져 나가기
*/
//label은 왠만하면 쓰지 말자

for (let i = 1; i < 11 ; i++) {
  if (i % 2 == 0) continue;
  console.log(i)
}