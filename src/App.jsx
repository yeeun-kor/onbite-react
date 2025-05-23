import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  //# useRef 로 mount상태 체크하기 (초기값 : 아직 마운트 되지 않았으니 false)
  const isMount = useRef(false);

  //1. 마운트 : 생성
  useEffect(() => {
    console.log("mount");
  }, []);
  //2. 업데이팅 : 변화, 리랜더링
  useEffect(() => {
    //마운트 체크하는 조건문
    //만약 현재 레퍼런스값이 false라면? mount되지 않은 것이죠
    //그래서 최초 마운트시에 false이니깐 current값을 true바꿔주고 밖으로 빠져나오기
    //그래서 updating콘솔 출력 안나오게 될 것.
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("updating");
  });
  //3. 언마운트 : 죽음 ( 짝수일때만, 화면랜더링)

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
        {count % 2 === 0 ? <Even></Even> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}></Controller>
      </section>
    </div>
  );
}

export default App;
