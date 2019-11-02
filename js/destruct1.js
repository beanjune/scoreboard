//배열 해체 할당 : 순서대로 할당
//const [a,b,c = 30] = [10,20,30,40,50];

// c=30 default 파라미터 문법

//console.log(a,b,c);


const [a,b,...c] = [10,20,30,40,50];

console.log(a,b,c);

//rest 연산자 ...은 스프레드와 rest(나머지) 연산자가 있다. 여기서는 나머지를 배열로 할당한다