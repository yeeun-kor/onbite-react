import React from "react";

export default function Welcome({ name, isMember }) {
  return (
    <div>
      <h1>
        {isMember === true
          ? `${name}님 다시 오셨군요!`
          : `${name}님 가입 하시겠습니까?`}
      </h1>
    </div>
  );
}
