import React, { useEffect } from "react";

export default function Even() {
  //짝수이면 보이고, 홀수일땐 보이지 않게 unmount되도록 제어하기
  useEffect(() => {
    //콜백함수가 반환하는 함수를 -> 클린업or정리함수라고 부름
    //정리함수는 useEffect가 끝날때 실행됨.
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
}
