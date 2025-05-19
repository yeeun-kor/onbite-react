import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Countet";

function App() {
  return (
    <>
      {/* 전구 */}
      <Bulb></Bulb>
      {/* 버튼count */}
      <Counter></Counter>
    </>
  );
}

export default App;
