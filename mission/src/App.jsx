import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const name = "정예은";
  const isMember = true;
  return (
    <>
      <Welcome name={name} isMember={isMember}></Welcome>
    </>
  );
}

export default App;
