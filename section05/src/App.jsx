import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Button text={"메일"} color={"blue"} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <Header></Header>
      </Button>
    </>
  );
}

export default App;
