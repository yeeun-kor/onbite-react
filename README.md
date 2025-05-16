# onebite-React

## 2025.05.16 Node.js모듈시스템 이해하기

### 📚 모듈이란?

- 최소한의 기능단위들을 자바스크립트로 파일로 코드 구현한 단위.
- 회원관리 기능 👉🏻 user모듈
- 결제 기능 👉🏻 payment모듈

### 모듈시스템이란?

모듈생성 + 불러오기 + 사용 하는 등 , 다양한 기능을 제공하는 시스템

- 주로 2가지 시스템을 사용하게 될 것.
- Common Js 시스템
- ES Module 시스템

#### 1️⃣ Common Js 시스템

- 함수 내보내기
  : module.export{key값 : 함수명}
  : 보통 key명=함수명 같으면 하나로 '통일'가능

- 함수 사용하기
  : require("./math") Common.js 내장메서드 사용해서 불러오기
  ex)const moduleData = require("./math");
  : 구조 분해 할당으로도 사용 가능
  ex) const { add, sub } = require("./math");

#### 2️⃣ES Module 시스템

- 함수 내보내기
  : export키워드 뒤에 객체를 리터럴로 생성
  ex) export { add, sub };
  : 혹은, 함수 생성시 export키워드 function앞에 붙이기
  ex) export function sub(a,b){~}

- 함수 사용하기
  : import {객체 리터럴값 = 함수명 } from "내보내는 파일명.js" 하고 , 함수 사용하기 🎯확장자명 .js 꼭 붙이기
  ex) import { add, sub } from "./math.js";
  console.log(add(5, 8));

  ## ESM 특이사항

  1. export default 설정

  - export default function multiply (a,b) {~ }
    처럼 export에 default 를 설정하면 import 시 객체 리터럴 타입이름 자유롭게 변동 가능하다.
  - import 중괄호 할 필요도 없고, 자유롭게 이름 정해주면 된다.
  - 어차피 default값으로 설정되어 있으니깐 자동으로 불러오기 됨!
    ex) import mul from "./math.js";

  2. 같은 경로로 import불러오기 하면 한줄로 합치기 가능
     ex) from 경로가 동일하면 "," 사용하여 한줄로 압축할 수 있다.
     import mul, { add, sub } from "./math.js";
