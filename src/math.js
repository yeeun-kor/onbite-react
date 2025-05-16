//계산모듈 Math모듈
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
//- Common Js모듈 시스템 사용해서 함수 내보내기
module.exports = { add, sub };
//보내려는 key값의 이름과, 그에 해당하는 함수명이 동일한 경우 1개만 적어도 무방하다 -> 알아서 찾아줌.
