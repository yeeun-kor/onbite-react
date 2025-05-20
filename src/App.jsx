import "./App.css";
import OrderEditor from "./components/OrderEditor";
import Welcome from "./components/Welcome";

function App() {
  // const name = "정예은";
  // const isMember = true;
  return (
    <>
      {/* <Welcome name={name} isMember={isMember}></Welcome> */}
      <OrderEditor></OrderEditor>
    </>
  );
}

export default App;
