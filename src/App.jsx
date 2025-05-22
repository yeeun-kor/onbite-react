import { useEffect, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  //1. 마운트 : 생성
  useEffect(() => {
    console.log("mount");
  }, []);
  //2. 업데이팅 : 변화, 리랜더링
  useEffect(() => {
    console.log("updating");
  });
  //3. 언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
    console.log(count);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count}></Viewer>
      </section>
      <section>
        <Controller onClickButton={onClickButton}></Controller>
      </section>
    </div>
  );
}

export default App;
