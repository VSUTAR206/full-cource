import Nnnav from "./componenets/navbar";
import Cont from "./componenets/container";
import Timme from "./componenets/timebar";
import Currentdate from "./componenets/timebar";

function App() {
  return (
    <div className="container">
      <Nnnav></Nnnav>
      <Cont></Cont>
      <Currentdate></Currentdate>
    </div>
  );
}

export default App;
