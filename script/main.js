//white , for 반복문(loop)
// while (condition){} 반복문 본문(body)이라 불림
// let i = 3;      //기준
// while (i<3){    //범위
//     alert(i);   //출력할 변수
//     i++;
// }

// let i =0;
// do {
//     alert(i); // 0,1,2 출력
//     i++;
// } while (i < 3);




//문자형
// let value = true;
// alert(typeof value); // boolean

// value = String(value); // 변수 value엔 문자열 "true" 저장
// alert(typeof value); // string

//숫자형
// alert("6"/"2");//3,문자열이 숫자형으로 자동변환된 후 연산이 수행

// let str = "123";
// alert(typeof str);
// let num = Number(str); //문자열 "123"이 숫자 123으로 변환됩니다.
// alert(typeof num); //number

// let age = Number("임의의 문자열 123");
// alert(age); //NaN,형 변환이 실패

// alert( Number("  123  ")); //123
// alert( Number("123z"));    //NaN ("z"를 숫자로 변환하는 데 실패함)
// alert( Number(true));      //1
// alert( Number(false));     //0

//불린형
// alert( Boolean(1) ); //숫자 1(true)
// alert( Boolean(0) ); //숫자 0(false)

// alert( Boolean("hello") ); //문자열(true)
// alert( Boolean("") ); //빈 문자열(false)

