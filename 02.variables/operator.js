/* Operator Description
  +	      Addition
  -	      Subtraction
  *	      Multiplication
  **	    Exponentiation (ES2016)
  /	      Division
  %	      Modulus (Division Remainder)
  ++	    Increment
  --	    Decrement
*/

/* 대입 연산자
  =	      x = y	      x = y
  +=	    x += y	    x = x + y
  -=	    x -= y	    x = x - y
  *=	    x *= y	    x = x * y
  /=	    x /= y	    x = x / y
  %=	    x %= y	    x = x % y
  **=	    x **= y	    x = x ** y
*/

/*논리 연산자
  &&	      logical and     모두 참일때 참 
  ||	      logical or      1개 이상 참일때 참
  !	        logical not     거짓일 때 참, 참일 때 거짓
*/

/*bitwise
  &	  AND	      5 & 1	0101 & 0001	0001	 1
  |	  OR	      5 | 1	0101 | 0001	0101	 5
  ~	  NOT	      ~ 5	 ~0101	1010	 10
  ^	  XOR	      5 ^ 1	0101 ^ 0001	0100	 4

  <<	Zero fill left shift	  5 << 1	  0101 << 1	1010	 10
  >>	Signed right shift	    5 >> 1	  0101 >> 1	0010	  2   음수 양수를 결정하는 맨 앞은 그대로 둔다.
  >>>	Zero fill right shift  	5 >>> 1	  0101 >>> 1	0010	  2 무조건 0일 앞에 붙는다
*/

/*비교 연산자 
                                       if x = 5;
    ==	equal to	                        x == 8	       false	
                                          x == 5	       true	
                                          x == "5"	     true	
    ===	equal value and equal type	      x === 5	       true	
                                          x === "5"	     false	
    !=	not equal	                        x != 8	       true	
    !==	not equal value or not equal type	x !== 5	       false	
                                          x !== "5"	     true	
                                          x !== 8	       true	
    >	greater than	                      x > 8	         false	
    <	less than	                          x < 8	         true	
    >=	greater than or equal to	        x >= 8	       false	
    <=	less than or equal to	            x <= 8	       true
*/
x=[1,2,3,4,5];
y=[1,2,3,4,5];

console.log(x==y); //x,y 가 가진 주소값이 다름
console.log(x===y);//
console.log(x!=y);


