//객체 해체 할당 : 동일한 키로 매핑

const {a,b,...c} = {a:10, b:20, c:30, d:40, e:50};

console.log(a,b,c);