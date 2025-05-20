import React, { useRef, useState } from "react";

//회원가입 폼 만들기
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개

export default function Register() {
  //* 통합 상태 저장
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio:""
  })
  
  // *useRef 레퍼런스 객체 만들기 
  const countRef = useRef(0);
  const inputRef = useRef()
  let count = 0;

  // * 통합 이벤트 핸들러
  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({...input,[e.target.name]:e.target.value}
    )
  }
  
  //*제출하는 이벤트 
  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 DOM요소에 포커싱함. 
  inputRef.current.focus()
    
    }
  }

  return (
    <div>
     
      <div>
        {/* 1. 이름 */}
        <input
          ref={inputRef}
        name="name"  value={input.name} placeholder="이름" onChange={onChange} />
        입력값 : {input.name}
      </div>
      <div>
        {/* 2. 생년월일 */}
        <input
        name="birth"  value={input.birth} type="date" onChange={onChange} />
        입력값 : {input.birth}
      </div>
      <div>
        {/* 3. 국적 선택 */}
        <select
        name="country"  onChange={onChange} value={input.country}>
          <option value="없음">선택</option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="ek">영국</option>
        </select>
        국적 확인 : {input.country}
      </div>
      <div>
        {/* 자기소개 */}
        <textarea
          name="bio"
          onChange={onChange}
          placeholder="자기소개"
          value={input.bio}
        ></textarea>
        자기소개 내용 : {input.bio}
      </div>
      <button  onClick={onSubmit}> 제출하기</button>
    </div>
  );
}
