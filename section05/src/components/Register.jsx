import React, { useState } from "react";

//회원가입 폼 만들기
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개

export default function Register() {
  //* 상태저장
  const [name, setName] = useState("홍길동");
  const today = new Date().toISOString().split("T")[0];
  const [birth, setBirth] = useState(today);
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  //사용자가 이름을 입력하면? -> 즉 , input의 값이 변화 한다면? (onChange)
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        {/* 1. 이름 */}
        <input value={name} placeholder="이름" onChange={onChangeName} />
        입력값 : {name}
      </div>
      <div>
        {/* 2. 생년월일 */}
        <input value={birth} type="date" onChange={onChangeBirth} />
        입력값 : {birth}
      </div>
      <div>
        {/* 3. 국적 선택 */}
        <select onChange={onChangeCountry} value={country}>
          <option value="없음">선택</option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="ek">영국</option>
        </select>
        국적 확인 : {country}
      </div>
      <div>
        {/* 자기소개 */}
        <textarea
          onChange={onChangeBio}
          placeholder="자기소개"
          value={bio}
        ></textarea>
        자기소개 내용 : {bio}
      </div>
    </div>
  );
}
