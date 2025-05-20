import React, { useState } from "react";
import useInput from "../hooks/useInput";

export default function HookExam() {
  const [input, onChange] = useInput();
  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      HookExam
    </div>
  );
}
