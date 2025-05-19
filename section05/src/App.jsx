import { useState } from "react";
import "./App.css";

function App() {
  //state생성
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  return (
    <>
      {/* 전구 */}
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "전구 끄기" : "전구 켜기"}
        </button>
      </div>
      {/* 버튼count */}
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
