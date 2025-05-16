//- Common Js모듈 시스템 내장함수인 require함수를 사용해서 export한 key값을 불러올 수 있음.
const moduleData = require("./math");
console.log(moduleData.add(3, 5));
console.log(moduleData.sub(3, 5));

//- 구조분해 할당 사용(export의 key값을 가지고 옴)
const { add, sub } = require("./math");
console.log(add(1, 2));
console.log(sub(1, 2));
