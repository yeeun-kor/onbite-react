import { useState } from "react";

const Bulb = () => {
  //state생성
  const [light, setLight] = useState("OFF");
  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "grey" }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "전구 끄기" : "전구 켜기"}
      </button>
    </div>
  );
};

export default Bulb;
